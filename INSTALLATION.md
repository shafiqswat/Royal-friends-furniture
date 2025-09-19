<!-- @format -->

# Royal Friends Furniture - Installation Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
royal-friends-furniture/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── globals.css        # Global styles with Tailwind CSS v4
│   │   ├── layout.js          # Root layout component
│   │   └── page.js            # Home page
│   ├── assets/                # Static data and SVG components
│   │   ├── Dummy.js           # All static content and data
│   │   └── Svg.jsx            # SVG icon components
│   ├── components/            # React components
│   │   ├── cards/             # Card components
│   │   │   ├── FeatureCard.js
│   │   │   ├── ServiceCard.js
│   │   │   └── TestimonialCard.js
│   │   ├── form/              # Form components
│   │   │   └── Link.js
│   │   ├── ContactSection.js
│   │   ├── HeroSection.js
│   │   ├── LeafletMapComponent.js
│   │   ├── ServicesSection.js
│   │   ├── TestimonialsSection.js
│   │   └── WhyChooseUs.js
│   ├── layout/                # Layout components
│   │   ├── Footer.js
│   │   └── Header.js
│   └── utils/                 # Utility functions
│       └── smoothScroll.js
├── public/                    # Static assets
│   ├── images/               # Image placeholders
│   ├── favicon.ico
│   ├── Robots.txt
│   └── sitemap.xml
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
└── jsconfig.json
```

## 🎨 Design Features

### Color Palette

The website uses a beautiful wood-themed color palette:

- **Wood Oak**: #8B4513
- **Wood Mahogany**: #C04000
- **Wood Walnut**: #3C2415
- **Wood Pine**: #F4E4BC
- **Wood Cedar**: #8B7355
- **Wood Cherry**: #A0522D
- **Wood Ash**: #E6D3A3
- **Wood Ebony**: #2F1B14
- **Accent Gold**: #D4AF37
- **Accent Bronze**: #CD7F32

### Animations

- Smooth scroll navigation
- Framer Motion animations
- Hover effects on cards
- Loading animations
- Staggered content reveals

## 🗺️ Map Integration

The website includes an interactive map showing the Dragon Mart location using React Leaflet:

- **Location**: Dragon Mart shop number GBG 12
- **Coordinates**: 25.2048, 55.2708
- **Features**: Custom markers, popups, and responsive design

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Updating Content

All static content is stored in `src/assets/Dummy.js`. You can easily update:

- Company information
- Services
- Testimonials
- Contact details
- Statistics

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.js`
3. Add navigation link in `src/assets/Dummy.js`

### Styling

- Global styles are in `src/app/globals.css`
- Uses Tailwind CSS v4 with custom wood color palette
- Custom animations and transitions included

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 📞 Contact Information

- **Address**: Dragon Mart shop number GBG 12
- **Mobile 1**: 00971559241479
- **Mobile 2**: 00971555088276
- **Email**: royalfriendsfurniture@gmail.com

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Main Dependencies

- **Next.js 15** - React framework
- **React 18** - UI library
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Leaflet** - Map integration
- **Lucide React** - Icons

### Development Dependencies

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript types** - Type definitions

## 🎯 Features

- ✅ Modern, responsive design
- ✅ Wood-themed color palette
- ✅ Smooth animations and transitions
- ✅ Interactive map integration
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Fast loading performance
- ✅ Mobile-first approach
- ✅ Accessibility features
- ✅ Clean, maintainable code

## 🔍 SEO Features

- Meta tags for social sharing
- Structured data
- Sitemap.xml
- Robots.txt
- Optimized images
- Fast loading times

## 🎨 Inspiration

This website is inspired by the Royal Prince Furniture website but with a unique wood color theme and modern design improvements.

---

**Developed with ❤️ for Royal Friends Furniture**
