# \</cgyudistira> - AI, Data & Automation Enthusiast

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-ccff03?style=for-the-badge\&logo=github\&logoColor=black)](https://cgyudistira.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-000000?style=for-the-badge\&logo=html5\&logoColor=ccff03)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-000000?style=for-the-badge\&logo=css3\&logoColor=ccff03)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ccff03?style=for-the-badge\&logo=javascript\&logoColor=000000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-000000?style=for-the-badge\&logoColor=ccff03)](LICENSE)

> Modern dark-themed personal portfolio website with neon yellow accents, showcasing 19+ years of expertise in Data Science, AI, Credit Risk Analysis, and Cultural Preservation.

## 🌐 Live Demo

**Visit:** <https://cgyudistira.github.io>

## 📋 Overview

Professional portfolio website featuring a futuristic **Dark + Neon Yellow** theme with interactive particle effects, animated counters, and smooth scrolling. Built with vanilla HTML, CSS, and JavaScript for optimal performance and modern aesthetics.

### Key Highlights

* 🎯 **19+ Years Experience** in Data Science & AI
* 🏆 **50+ Projects Completed** with measurable impact
* 🌍 **3+ Industries Served**: Banking, Logistics, Cultural Tech
* 🏛️ **Cultural Preservation**: AI-powered Lontar manuscript digitization
* 💼 **Banking & Credit Risk** domain expertise

## ✨ Features

### Design & UI

* **Dark + Neon Yellow Theme**: Professional dark background (#000) with vibrant neon yellow (#ccff03) accents
* **Particle Effect**: Interactive animated particles in hero section with mouse interaction
* **Glassmorphism Effects**: Modern frosted glass card designs with backdrop blur
* **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
* **Smooth Animations**: Counter counting up animation, scroll reveals, and transitions
* **Custom Logo**: Unique branding with \</cgyudistira> tag-style logo

### Animations & Interactions

* **Hero Particle Effect**: Dynamic particle system with connection lines and mouse interaction
* **Counter Animation**: Animated statistics counting from 0 to target values (19+, 50+, 3+)
* **Scroll Reveal**: Intersection Observer API for smooth section animations
* **Smooth Scrolling**: Native smooth scroll behavior for anchor links
* **Timeline Design**: Professional career timeline with visual dots and dates
* **Hover Effects**: Subtle transform effects on cards and interactive elements
* **Mobile Menu**: Hamburger navigation with smooth toggle animations

### Performance Optimizations

* **No Heavy Libraries**: Pure vanilla JavaScript (no jQuery, minimal dependencies)
* **Optimized Animations**: CSS transforms and GPU acceleration
* **Intersection Observer**: Efficient lazy loading and scroll-triggered animations
* **Minimal Dependencies**: Only Google Fonts (Inter) for typography
* **Clean Code**: Optimized CSS and JavaScript for faster load times

## 🛠️ Tech Stack

### Frontend

* **HTML5**: Semantic markup with accessibility considerations
* **CSS3**:
  * CSS Grid & Flexbox for layouts
  * CSS Custom Properties (variables) for theming
  * Keyframe animations for smooth transitions
  * Media queries for responsive design
  * Backdrop filters for glassmorphism
* **JavaScript (ES6+)**:
  * Intersection Observer API for scroll animations
  * Canvas API for particle effects
  * Custom counter animation implementation
  * Event delegation for performance
  * Mobile menu toggle functionality

### Design

* **Google Fonts**: Inter font family (300-800 weights)
* **SVG Icons**: Inline SVG graphics throughout
* **Color System**: CSS variables with dark + neon yellow theme
* **Responsive Images**: Optimized logo and favicon

### Deployment

* **GitHub Pages**: Automated deployment from main branch
* **Custom Domain Ready**: Configured for DNS settings

## 📂 Project Structure

```
cgyudistira.github.io/
├── index.html              # Main HTML structure
├── style.css               # Dark + Neon Yellow themed CSS
├── script.js               # Particle effects & counter animations
├── assets/
│   └── img/
│       ├── favicon.png     # Website favicon (neon yellow)
│       ├── logo.png        # Brand logo (neon yellow)
│       └── README.md       # Asset guidelines
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

* Modern web browser (Chrome, Firefox, Safari, Edge)
* Text editor (VS Code, Sublime Text, etc.) for modifications
* Git for version control

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
| Neon Yellow | `#ccff03` | Primary brand color, accents, particles |
| Pure Black | `#000000` | Main background |
| Dark Gray | `#1a1a1a` | Section backgrounds, cards |
| Border Yellow | `rgba(204, 255, 3, 0.2)` | Card borders, subtle accents |
| Text Primary | `#ffffff` | Main text content |
| Text Muted | `#9ca3af` | Secondary text, descriptions |

### Typography

* **Font Family**: Inter (Google Fonts)
* **Weights**: 300, 400, 500, 600, 700, 800
* **Headings**: 700-800 weight with neon yellow accents
* **Body**: 400 weight for optimal readability
* **Monospace**: Used for code-style branding (\</cgyudistira>)

### Responsive Breakpoints

| Device | Breakpoint | Layout Changes |
|--------|------------|----------------|
| Desktop | ≥ 1200px | Full multi-column layout |
| Laptop | 1024px - 1199px | Adjusted spacing |
| Tablet | 768px - 1023px | 2-column to 1-column |
| Mobile | < 768px | Single column, hamburger menu |
| Small Mobile | < 480px | Optimized touch targets |

## 🎭 Sections Overview

### 1. Hero Section

* Animated particle background (Canvas API)
* Dynamic text with neon yellow highlights
* CTA buttons with hover effects
* Badge with pulsing dot animation

### 2. About Section

* Concise bio highlighting experience and passion
* **Animated counter boxes** (19+, 50+, 3+)
* Cultural preservation mission statement
* Glassmorphism card design

### 3. Professional Experience Timeline

* Visual timeline with dots and connection lines
* 4 major career milestones (2006-Present)
* Detailed role descriptions
* Industry-specific context

### 4. Expertise Section

* 3 core competencies with SVG icons
* Data Science, Machine Learning, Credit Risk Modeling
* Clean card-based layout

### 5. Featured Projects

* 4 showcase projects with metrics
* Technology tags for each project
* Project links and CTAs
* Grid layout with responsive design

### 6. Contact Section

* Email, website, and location information
* Contact form with validation
* Social media links (GitHub, LinkedIn, etc.)
* Professional WhatsApp float button

### 7. Footer

* Brand logo and tagline
* Quick navigation links
* Social media icons
* Copyright information

## 🔧 Customization Guide

### Updating Content

1. **Personal Information**: Edit `index.html`
   * Hero section: Update name, title, description
   * About section: Modify bio and statistics
   * Experience: Update timeline entries
   * Projects: Update project details and metrics

2. **Styling**: Modify `style.css`
   * Colors: Change CSS variables in `:root`
   * Animations: Adjust keyframes and transitions
   * Layout: Modify grid/flexbox properties

3. **Functionality**: Update `script.js`
   * Particle count and behavior
   * Counter animation speed
   * Scroll behavior settings

### Changing Theme Colors

To change from neon yellow to another color:

```css
/* In style.css, modify the :root variables */
:root {
    --primary: #your-color;  /* Change from #ccff03 */
    --bg-dark: #000000;
    --text: #ffffff;
    /* ... other variables */
}
```

## 📊 Performance Metrics

* **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
* **Load Time**: < 2 seconds on 3G
* **Total Size**: < 100KB (excluding fonts)
* **No External Dependencies**: Pure vanilla JavaScript
* **Mobile Optimized**: Touch-friendly and responsive

## 🐛 Known Issues & Solutions

| Issue | Solution |
|-------|----------|
| Particle effect laggy on mobile | Automatically reduced particle count on smaller screens |
| WhatsApp button overlapping content | Fixed positioning with proper z-index |
| Counter animation playing multiple times | Intersection Observer unobserves after first trigger |
| Logo not loading | Fallback to text logo automatically |

## 🔄 Version History

### v3.0.0 (2025-11-26) - Current

* ✨ **Dark + Neon Yellow** redesign
* 🎨 Professional dark theme with vibrant accents
* ⚡ Canvas-based particle effect system
* 📊 Animated counter boxes with Intersection Observer
* 🌐 Separate About and Professional Experience sections
* 💼 Updated to 19+ years experience
* 🏛️ Cultural preservation content integration
* 📱 Enhanced mobile responsiveness
* 🔧 Code optimization and cleanup
* 📞 WhatsApp float button integration

### v2.0.0 (2025-11)

* Purple-pink gradient theme
* Initial particle effects
* Project showcase expansion

### v1.0.0 (2025-01)

* 🚀 Initial website launch
* 📄 Basic portfolio structure
* 💼 Project showcase
* 📧 Contact information

## 📧 Contact & Support

### Get in Touch

* **Email**: <cokorda@gmail.com>
* **LinkedIn**: [linkedin.com/in/cgyudistira](https://linkedin.com/in/cgyudistira)
* **GitHub**: [github.com/cgyudistira](https://github.com/cgyudistira)
* **Website**: [cgyudistira.my.id](https://cgyudistira.my.id)
* **WhatsApp**: +62 813-3735-2777

### Report Issues

Found a bug or have a suggestion? Please open an issue on GitHub.

## 📄 License

© 2025 \</cgyudistira>. All Rights Reserved.

This website and its contents are proprietary. Unauthorized copying, modification, or distribution is prohibited.

## 🙏 Acknowledgments

* **Google Fonts** for the Inter font family
* **GitHub Pages** for free hosting
* **Canvas API** for particle effect capabilities
* **MDN Web Docs** for technical references
* **Intersection Observer API** for efficient scroll animations

## 📈 Future Enhancements

* \[ ] Dark/Light theme toggle
* \[ ] Blog section for technical articles
* \[ ] Project filtering by technology/category
* \[ ] Testimonials section
* \[ ] Multi-language support (English/Bahasa Indonesia)
* \[ ] Contact form with backend integration
* \[ ] Analytics integration (Google Analytics/Plausible)
* \[ ] RSS feed for updates
* \[ ] Downloadable resume/CV

***

<div align="center">

**Built with ❤️ and ☕ by \</cgyudistira>**

⭐ Star this repo if you find it helpful!

![Neon Yellow](https://via.placeholder.com/800x100/000000/ccff03?text=Dark+%2B+Neon+Yellow+Theme)

</div>
