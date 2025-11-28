// Netlify Serverless Function - Secure API Proxy for Groq
exports.handler = async function (event, context) {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse request body
        const { message } = JSON.parse(event.body);

        // Validate input
        if (!message || typeof message !== 'string') {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Message is required and must be a string' })
            };
        }

        // Validate environment variables
        if (!process.env.GROQ_API_KEY) {
            console.error('GROQ_API_KEY not configured');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Server configuration error' })
            };
        }

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
                        content: process.env.SYSTEM_PROMPT || "You are ARA, a helpful AI assistant for cgyudistira's portfolio. You help visitors learn about cgyudistira's projects, skills, and experience in Data Science, Machine Learning, and AI. Keep responses concise and professional."
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
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error('API Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to get AI response',
                details: error.message
            })
        };
    }
};
