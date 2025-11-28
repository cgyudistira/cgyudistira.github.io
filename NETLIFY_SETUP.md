# Setup Netlify untuk Chat Widget

## 📋 Langkah-langkah Deploy ke Netlify

### 1. Install Netlify CLI (Opsional untuk local testing)

```bash
npm install -g netlify-cli
```

### 2. Login ke Netlify

```bash
netlify login
```

### 3. Initialize Project

```bash
netlify init
```

### 4. Set Environment Variables di Netlify Dashboard

Buka **Site Settings > Environment Variables** dan tambahkan:

* `GROQ_API_KEY` = `your_groq_api_key_here`
* `GROQ_MODEL` = `llama-3.3-70b-versatile`
* `SYSTEM_PROMPT` = `You are ARA, a helpful AI assistant for cgyudistira's portfolio. You help visitors learn about cgyudistira's projects, skills, and experience in Data Science, Machine Learning, and AI. Keep responses concise and professional.`

### 5. Deploy ke Netlify

**Opsi A: Deploy via Dashboard**

1. Buka [Netlify Dashboard](https://app.netlify.com/)
2. Pilih "Add new site" > "Import an existing project"
3. Connect ke GitHub repository
4. Deploy settings sudah otomatis dibaca dari `netlify.toml`

**Opsi B: Deploy via CLI**

```bash
# Deploy production
netlify deploy --prod

# Atau build & deploy sekaligus
netlify deploy --prod --dir=.
```

### 6. Test Local (Opsional)

Untuk testing di local dengan Netlify Functions:

```bash
# Install dependencies
npm install

# Run Netlify Dev server
netlify dev
```

Website akan berjalan di `http://localhost:8888` dengan Netlify Functions.

## 🔧 Struktur File

```
cgyudistira.github.io/
├── netlify.toml              # Netlify configuration
├── netlify/
│   └── functions/
│       └── chat.js           # Serverless function untuk chat
├── index.html                # Main website
├── script.js                 # Frontend JavaScript (updated)
├── style.css                 # Styling
└── assets/                   # Images, etc
```

## ✅ Verifikasi

Setelah deploy, test chat widget:

1. Buka website di URL Netlify (contoh: `https://your-site.netlify.app`)
2. Klik tombol chat widget di pojok kanan bawah
3. Ketik pesan "halo" atau "hi"
4. Pastikan AI merespons dengan benar

## 🐛 Troubleshooting

### Chat widget error "Failed to connect"

* Pastikan environment variables sudah di-set di Netlify Dashboard
* Check Netlify Function logs: **Functions > chat > Recent logs**
* Verify GROQ\_API\_KEY masih valid

### Function timeout

* Increase function timeout di `netlify.toml` jika perlu
* Default timeout adalah 10 detik

### CORS errors

* Header CORS sudah di-set di `netlify/functions/chat.js`
* Jika masih ada issue, check browser console untuk detail error

## 🔗 Links Penting

* [Netlify Dashboard](https://app.netlify.com/)
* [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
* [Groq API Docs](https://console.groq.com/docs)
