# Cokorda Gede Yudistira Putra

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://cgyudistira.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)](LICENSE)

> Modern AI-themed personal portfolio website showcasing 12+ years of expertise in Data Science, AI, and Credit Risk Analysis.

## 🌐 Live Demo

**Visit:** [https://cgyudistira.github.io](https://cgyudistira.github.io)

## 📋 Overview

Professional portfolio website featuring a futuristic purple-pink gradient design with advanced animations and interactive elements. Built with vanilla HTML, CSS, and JavaScript for optimal performance.

### Key Highlights

- 🎯 **12+ Years Experience** in Data Science & AI
- 🏆 **50+ Projects Completed** with measurable impact
- 📈 **35% Accuracy Improvement** in credit scoring models
- 💼 **Banking & Credit Risk** domain expertise

## ✨ Features

### Design & UI
- **AI-Themed Aesthetics**: Purple-pink gradient color scheme with cyberpunk-inspired design
- **Glassmorphism Effects**: Modern frosted glass card designs with backdrop blur
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Custom Cursor**: Interactive cursor with glow effects (desktop only)
- **Animated Gradients**: Smooth color transitions on hero text elements

### Animations & Interactions
- **Scroll Reveal**: Fade-in animations triggered by viewport intersection
- **3D Tilt Effects**: Interactive project cards with perspective transforms
- **Typing Animation**: Dynamic text typing effect in hero section
- **Counter Animation**: Animated statistics with smooth number transitions
- **Progress Bars**: Skill level indicators with animated fills
- **Parallax Scrolling**: Floating gradient orbs with depth effect
- **Hover Transformations**: Smooth scale and translate effects on interactive elements

### Performance Optimizations
- **No External Libraries**: Pure vanilla JavaScript (no jQuery, no particles.js)
- **Optimized Animations**: CSS transforms and GPU acceleration
- **Lazy Loading**: Intersection Observer for efficient resource loading
- **Minimal Dependencies**: Only Google Fonts for typography
- **Clean Code**: Removed unused CSS/JS for faster load times

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: 
  - CSS Grid & Flexbox for layouts
  - CSS Custom Properties (variables) for theming
  - Keyframe animations for smooth transitions
  - Media queries for responsive design
  - Backdrop filters for glassmorphism
- **JavaScript (ES6+)**: 
  - Intersection Observer API for scroll animations
  - Custom cursor implementation
  - Dynamic typing effects
  - Animated counters
  - Event delegation for performance

### Design
- **Google Fonts**: Inter font family (300-800 weights)
- **SVG Icons**: Custom inline SVG graphics
- **Color System**: CSS variables for consistent theming

### Deployment
- **GitHub Pages**: Automated deployment from main branch
- **Custom Domain**: Configured with DNS settings

## 📂 Project Structure

```
cgyudistira.github.io/
├── index.html              # Main HTML structure
├── style.css               # Optimized CSS with animations
├── script.js               # Interactive JavaScript features
├── assets/
│   └── img/
│       ├── favicon.svg     # Website favicon
│       ├── logo.svg        # Brand logo
│       └── README.md       # Asset guidelines
└── README.md               # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for modifications
- Git for version control

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/cgyudistira/cgyudistira.github.io.git
   cd cgyudistira.github.io
   ```

2. **Open in browser**
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

3. **Or use a local server** (recommended)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

### Deployment

**Automatic Deployment**: Changes pushed to the `main` branch are automatically deployed to GitHub Pages.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

**Manual Deployment**: 
1. Go to repository Settings → Pages
2. Select `main` branch as source
3. Save and wait for deployment

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Purple | `#8B5CF6` | Main brand color, buttons, links |
| Secondary Pink | `#EC4899` | Accents, gradients, highlights |
| Accent Cyan | `#06B6D4` | Tertiary accents (minimal use) |
| Dark Background | `#0A0A14` | Main background |
| Dark Light | `#1A1A2E` | Section backgrounds |
| Text Primary | `#E5E7EB` | Main text content |
| Text Muted | `#9CA3AF` | Secondary text, descriptions |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Headings**: 800 weight with gradient effects
- **Body**: 400 weight for readability

### Responsive Breakpoints

| Device | Breakpoint | Layout Changes |
|--------|------------|----------------|
| Desktop | ≥ 1200px | Full multi-column layout |
| Laptop | 1024px - 1199px | Adjusted spacing |
| Tablet | 768px - 1023px | 2-column to 1-column |
| Mobile | < 768px | Single column, hamburger menu |
| Small Mobile | < 480px | Optimized touch targets |

## 🔧 Customization Guide

### Updating Content

1. **Personal Information**: Edit `index.html`
   - Hero section: Update name, title, description
   - About section: Modify bio and highlights
   - Skills: Add/remove skill cards
   - Projects: Update project details and metrics

2. **Styling**: Modify `style.css`
   - Colors: Change CSS variables in `:root`
   - Animations: Adjust keyframes and transitions
   - Layout: Modify grid/flexbox properties

3. **Functionality**: Update `script.js`
   - Animation timings
   - Scroll behavior
   - Interactive features

### Adding New Sections

```html
<section id="new-section" class="section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Tag</span>
            <h2 class="section-title">Title</h2>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds on 3G
- **Total Size**: < 500KB (including fonts)
- **No External Dependencies**: Pure vanilla JavaScript

## 🐛 Known Issues & Solutions

| Issue | Solution |
|-------|----------|
| Custom cursor not showing | Desktop only feature, disabled on mobile |
| Animations laggy on mobile | Reduced animations for mobile devices |
| Logo not loading | Fallback to icon and text automatically |

## 🔄 Version History

### v2.0.0 (2025-11-15)
- ✨ Complete redesign with AI theme
- 🎨 Purple-pink gradient color scheme
- ⚡ Performance optimization (removed particles.js)
- 🎭 Custom cursor implementation
- 📱 Enhanced mobile responsiveness
- 🔧 Code cleanup and optimization
- 🌈 Animated gradient effects on hero text
- 🔐 Login modal with admin/automation options

### v1.0.0 (2025-01)
- 🚀 Initial website launch
- 📄 Basic portfolio structure
- 💼 Project showcase
- 📧 Contact information

## 📧 Contact & Support

### Get in Touch
- **Email**: [cokorda@gmail.com](mailto:cokorda@gmail.com)
- **LinkedIn**: [linkedin.com/in/cgyudistira](https://linkedin.com/in/cgyudistira)
- **Website**: [cgyudistira.github.io](https://cgyudistira.github.io)

### Report Issues
Found a bug or have a suggestion? Please open an issue on GitHub.

## 📄 License

© 2025 Cokorda Gede Yudistira Putra. All Rights Reserved.

This website and its contents are proprietary. Unauthorized copying, modification, or distribution is prohibited.

## 🙏 Acknowledgments

- **Google Fonts** for the Inter font family
- **GitHub Pages** for free hosting
- **CSS Tricks** for animation inspiration
- **MDN Web Docs** for technical references

## 📈 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section for articles
- [ ] Project filtering by category
- [ ] Testimonials section
- [ ] Multi-language support
- [ ] Contact form with backend
- [ ] Analytics integration

---

<div align="center">

**Built with ❤️ and ☕ by Cokorda Gede Yudistira Putra**

⭐ Star this repo if you find it helpful!

</div>
