# DevOps Portfolio - Suraj Pawar

A modern, responsive portfolio website showcasing DevOps expertise in AWS, Azure, and Kubernetes.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, typing animations, and hover effects
- **Skills Showcase**: Visual representation of technical skills with progress bars
- **Project Portfolio**: Featured projects with technology tags
- **Contact Form**: Easy-to-use contact form for inquiries
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables and Animations)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- Google Fonts (Inter & JetBrains Mono)

## 📋 Sections

1. **Hero Section**: Introduction with animated typing effect
2. **About**: Personal background and statistics
3. **Skills**: Technical skills organized by categories
4. **Experience**: Professional timeline
5. **Projects**: Featured DevOps projects
6. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The portfolio is ready to use.

## 🌐 Deploy to GitHub Pages

### Quick Deploy

1. **Create a GitHub repository** (if you haven't already):
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio` or `your-username.github.io` (for custom domain)

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Custom Domain (Optional)

If you want to use a custom domain:
- Add a `CNAME` file in the root with your domain name
- Configure DNS settings as per GitHub Pages documentation

### Local Development

For a better development experience, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Personal Information

1. **Name & Title**: Update in `index.html` (Hero section)
2. **About Section**: Modify the about text in the About section
3. **Experience**: Update the timeline items with your actual experience
4. **Projects**: Replace placeholder projects with your real projects
5. **Contact Info**: Update email, phone, and social media links
6. **Skills**: Adjust skill levels in the `data-width` attributes

### Colors & Styling

All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00d9ff;
    --secondary-color: #7c3aed;
    --accent-color: #f59e0b;
    --bg-primary: #0a0e27;
    /* ... more variables */
}
```

Change these values to match your preferred color scheme.

### Typing Animation

Modify the typing text array in `script.js`:

```javascript
const texts = ['DevOps Engineer', 'Cloud Architect', 'Kubernetes Expert', 'Automation Specialist'];
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This portfolio template is free to use and modify for personal or commercial projects.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out through the contact form on the portfolio.

---

**Built with ❤️ for DevOps Engineers**
