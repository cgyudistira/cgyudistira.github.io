// Vercel Serverless Function - Secure API Proxy for Groq
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;

    // Validate input
    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required and must be a string' });
    }

    // Validate environment variables
    if (!process.env.GROQ_API_KEY) {
        console.error('GROQ_API_KEY not configured');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        // Call Groq API with secured API key
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "system",
                        content: process.env.SYSTEM_PROMPT || "You are ARA, a helpful AI assistant."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ],
                model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Groq API Error:', response.status, errorData);
            throw new Error(`Groq API error: ${response.statusText}`);
        }

        const data = await response.json();

        // Return successful response
        res.status(200).json(data);

    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({
            error: 'Failed to get AI response',
            details: error.message
        });
    }
}
