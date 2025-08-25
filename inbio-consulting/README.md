# InBio - Personal Portfolio & Resume Website

A modern, responsive portfolio website built with React, Bootstrap, and advanced animations. This project replicates the design and functionality of a professional consulting portfolio website with dark/light theme support, particle backgrounds, and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive**: Fully responsive design that works on all devices
- **Particle Background**: Interactive particle animations on hero section
- **Typing Animation**: Dynamic typing effect for profession titles
- **Smooth Scrolling**: Smooth navigation between sections
- **Portfolio Gallery**: Filterable project gallery with modal previews
- **Contact Form**: Working contact form with validation
- **Skills Animation**: Animated progress bars and timeline
- **Service Cards**: Interactive service cards with hover effects
- **Social Integration**: Social media links and newsletter signup

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Bootstrap** - CSS framework for responsive design
- **React Bootstrap** - Bootstrap components for React
- **Framer Motion** - Animation library
- **React Particles** - Particle background effects
- **React Hook Form** - Form handling and validation
- **React Icons** - Icon library
- **AOS** - Animate On Scroll library
- **CSS3** - Custom styles and animations

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd inbio-consulting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Removes the single build dependency

## 📱 Sections

### 1. Hero Section
- Animated particle background
- Typing animation for job titles
- Professional photo with gradient border
- Call-to-action buttons
- Social media links

### 2. About Section
- Personal introduction
- Animated skill bars
- Statistics counters
- Work experience timeline
- Contact information

### 3. Services Section
- Interactive service cards
- Hover animations and overlays
- Pricing information
- Working process steps

### 4. Portfolio Section
- Filterable project gallery
- Modal previews with project details
- Technology tags
- Live demo and GitHub links

### 5. Contact Section
- Working contact form with validation
- Contact information cards
- Social media links
- Interactive map placeholder

### 6. Footer
- Brand information
- Quick navigation links
- Newsletter subscription
- Social media integration
- Scroll to top button

## 🎨 Customization

### Theme Colors
Update the CSS variables in `src/assets/css/style.css`:

```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #1e1e2e;
  --accent-color: #00d4ff;
  /* ... */
}
```

### Personal Information
Update the personal information in the components:
- `src/components/Hero/Hero.js` - Name and titles
- `src/components/About/About.js` - About content and skills
- `src/components/Contact/Contact.js` - Contact information
- `src/components/Portfolio/Portfolio.js` - Projects data

### Content Management
All content is stored within the components as JavaScript objects, making it easy to update:
- Skills and percentages
- Portfolio projects
- Services offered
- Timeline events
- Contact information

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎭 Animations

- Smooth scrolling between sections
- Fade-in animations on scroll
- Particle background interactions
- Typing effect animations
- Skill bar progress animations
- Card hover effects
- Button animations
- Loading animations

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Required field indicators
- Email format validation
- Success/error messages
- Loading states
- Responsive design

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions, please contact [john@example.com](mailto:john@example.com).

---

Built with ❤️ by John Smith