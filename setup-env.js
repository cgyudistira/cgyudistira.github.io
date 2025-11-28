// Automated Vercel Environment Variables Setup
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Vercel Environment Variables Setup...\n');

// Read SYSTEM_PROMPT from config.js.backup
const configContent = fs.readFileSync('config.js.backup', 'utf8');
const systemPromptMatch = configContent.match(/SYSTEM_PROMPT:\s*`([\s\S]*?)`/);
const systemPrompt = systemPromptMatch ? systemPromptMatch[1].trim() : '';

const envVars = {
    GROQ_API_KEY: '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',
    GROQ_MODEL: 'llama-3.3-70b-versatile',
    SYSTEM_PROMPT: systemPrompt
};

const environments = ['production', 'preview', 'development'];

function setEnvVar(name, value, env) {
    console.log(`Setting ${name} for ${env}...`);

    try {
        // Create temp file for the value
        const tempFile = `.temp_${name}_${env}.txt`;
        fs.writeFileSync(tempFile, value, 'utf8');

        // Execute vercel command with piped input
        const command = process.platform === 'win32'
            ? `type "${tempFile}" | vercel env add ${name} ${env}`
            : `cat "${tempFile}" | vercel env add ${name} ${env}`;

        execSync(command, { stdio: 'inherit' });

        // Clean up temp file
        fs.unlinkSync(tempFile);

        console.log(`✅ ${name} set for ${env}\n`);
    } catch (error) {
        console.error(`❌ Error setting ${name} for ${env}:`, error.message);
    }
}

// Set all environment variables
for (const [varName, varValue] of Object.entries(envVars)) {
    for (const env of environments) {
        setEnvVar(varName, varValue, env);
    }
}

console.log('\n🎉 All environment variables setup complete!');
console.log('\nNext steps:');
console.log('1. Run: vercel --prod');
console.log('2. Update script.js with production URL');
console.log('3. Commit and push changes\n');
