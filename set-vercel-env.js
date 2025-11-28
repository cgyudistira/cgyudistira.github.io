// Simple Vercel Environment Variables Setup
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('🚀 Vercel Environment Variables Setup\n');

const envVars = {
    GROQ_API_KEY: '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',
    GROQ_MODEL: 'llama-3.3-70b-versatile',
    SYSTEM_PROMPT: `You are ARA - AI assistant for </cgyudistira>'s portfolio.

📍 PROFILE:
• 19+ years experience in Data Science & AI
• Location: Bali, Indonesia
• Email: cokorda@gmail.com
• WhatsApp: +6281337352777

💼 WORK EXPERIENCE:
1. ML & AI Specialist - Logistics (2025-present)
2. Credit Risk ML & AI - Banking (2023-2025) - 30% accuracy improvement
3. Credit Risk Monitoring (2020-2024) - IFRS 9 ECL modeling

🎯 EXPERTISE:
Machine Learning, Deep Learning, Credit Risk Modeling, Computer Vision, NLP, Python, TensorFlow, PyTorch

🚀 PROJECTS:
1. Credit Scoring ML (85% accuracy)
2. Supply Chain Optimizer (40% cost reduction)
3. Bali Lontar OCR (95% accuracy, cultural preservation)
4. Retail Forecasting (90% accuracy)

🤖 YOUR ROLE:
- Introduce as "ARA"
- Answer questions about </cgyudistira> briefly
- Explain AI/ML concepts simply
- Generate contact links ONLY when explicitly asked

🌐 LANGUAGE:
- Default: ENGLISH (respond in English unless user writes in Indonesian)
- Match user's language preference

📝 COMMUNICATION STYLE:
• Brief (max 2-3 sentences)
• Friendly & professional
• Use emojis
• Match user's language
• NO contact links unless EXPLICITLY asked

CRITICAL RULES:
1. Name: ARA
2. ONLY show contact info when user CLEARLY asks for it
3. For general questions → answer WITHOUT contact info
4. Default ENGLISH, support Indonesian
5. Keep it SHORT (2-3 sentences max)`
};

const environments = ['production', 'preview', 'development'];

async function setEnvVar(name, value, env) {
    return new Promise((resolve) => {
        console.log(`\n📝 Setting ${name} for ${env}...`);
        console.log(`Value: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}\n`);

        rl.question(`Press ENTER to confirm and set ${name} for ${env} (or 'skip' to skip): `, (answer) => {
            if (answer.toLowerCase() === 'skip') {
                console.log(`⏭️  Skipped ${name} for ${env}`);
                resolve();
                return;
            }

            try {
                execSync(`echo "${value.replace(/"/g, '\\"')}" | vercel env add ${name} ${env}`, {
                    stdio: 'inherit',
                    shell: true
                });
                console.log(`✅ ${name} set for ${env}`);
            } catch (error) {
                console.error(`❌ Error setting ${name} for ${env}`);
            }
            resolve();
        });
    });
}

async function main() {
    console.log('This script will set the following env vars:');
    console.log('- GROQ_API_KEY');
    console.log('- GROQ_MODEL');
    console.log('- SYSTEM_PROMPT\n');
    console.log('For environments: production, preview, development\n');

    rl.question('Continue? (Y/n): ', async (answer) => {
        if (answer.toLowerCase() === 'n') {
            console.log('Setup cancelled.');
            rl.close();
            return;
        }

        for (const [varName, varValue] of Object.entries(envVars)) {
            for (const env of environments) {
                await setEnvVar(varName, varValue, env);
            }
        }

        console.log('\n🎉 All environment variables setup complete!');
        console.log('\nNext step: Run `vercel --prod` to redeploy\n');
        rl.close();
    });
}

main();
