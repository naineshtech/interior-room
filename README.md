# Premium Architecture & Décor Website

A modern, responsive React TypeScript website showcasing premium architectural and interior design services. Built with cutting-edge technologies and featuring a beautiful Indian-inspired design aesthetic.

## 🏗️ Features

- **Modern React 18** with TypeScript for type safety
- **Responsive Design** that works on all devices
- **Beautiful UI Components** using Radix UI and Tailwind CSS
- **Indian-Inspired Design** with warm, elegant color palette
- **Smooth Animations** and transitions
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with Vite build tool
- **Accessibility Focused** with proper ARIA labels and keyboard navigation

## 🎨 Design System

The website features a sophisticated design system inspired by Indian architecture and aesthetics:

- **Color Palette**: Warm terracotta, deep gold, charcoal, and cream tones
- **Typography**: Playfair Display for headings, Inter for body text
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth fade-ins, slide-ups, and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd "Premium Architecture & Décor Website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - The website will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to the URL

## 📁 Project Structure

```
Premium Architecture & Décor Website/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── figma/          # Figma-specific components
│   │   ├── HomePage.tsx    # Home page component
│   │   ├── AboutPage.tsx   # About page component
│   │   ├── PortfolioPage.tsx # Portfolio page component
│   │   ├── ContactPage.tsx # Contact page component
│   │   ├── Navigation.tsx  # Navigation component
│   │   └── Footer.tsx      # Footer component
│   ├── styles/
│   │   └── globals.css     # Global styles and Tailwind CSS
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 🎯 Pages & Features

### Home Page
- Hero section with stunning imagery
- Services overview (Architecture, Interior Design, Consultation)
- Portfolio preview with featured projects
- Statistics and achievements
- Testimonials carousel

### Portfolio Page
- Gallery of completed projects
- Filter by category (Residential, Commercial, Hospitality)
- Before/after sliders
- Project details and descriptions

### About Page
- Company story and philosophy
- Team member profiles
- Awards and recognition
- Design process explanation

### Contact Page
- Contact form with validation
- Office locations and hours
- Social media links
- Consultation booking

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  terracotta: "#c65d07",
  "deep-gold": "#b8860b",
  charcoal: "#2c2520",
  // ... more colors
}
```

### Typography
Fonts are imported from Google Fonts in `index.html`:
- Playfair Display (headings)
- Inter (body text)

### Components
All UI components are located in `src/components/ui/` and can be customized to match your brand.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### Deploy Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Traditional hosting**: Upload the `dist` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the console for error messages
2. Ensure all dependencies are installed correctly
3. Verify Node.js version is 18 or higher
4. Clear npm cache: `npm cache clean --force`

## 🎉 Credits

- **Design Inspiration**: Indian architecture and interior design
- **Icons**: Lucide React
- **Images**: Unsplash (placeholder images)
- **Fonts**: Google Fonts (Playfair Display, Inter)

---

**Premium Architecture & Décor** - Creating spaces that inspire and transform.
