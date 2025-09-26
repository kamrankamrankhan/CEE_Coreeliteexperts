# CEE Company Website

A modern, responsive company website built with Next.js, featuring reusable Header and Footer components with automatic theme switching and Three.js integration capabilities.

## 🚀 Features

- **Responsive Design**: Works seamlessly across all devices and screen sizes
- **Theme Switching**: Automatic light/dark mode with theme-aware company logo
- **Reusable Components**: Modular Header and Footer components for scalability
- **Modern UI**: Built with Tailwind CSS and Framer Motion for smooth animations
- **TypeScript**: Full type safety and better development experience
- **Three.js Ready**: Prepared for 3D visualizations and interactive experiences
- **Performance Optimized**: Built with Next.js 14 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Type Safety**: TypeScript
- **State Management**: React Context for theme management
- **Fonts**: Inter & Poppins from Google Fonts

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with ThemeProvider
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   └── layout/            # Layout components
│       ├── Header.tsx     # Responsive header with navigation
│       ├── Footer.tsx     # Footer with company info and links
│       └── Layout.tsx     # Wrapper component
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme management context
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities and class merging
└── types/                 # TypeScript type definitions
```

## 🎨 Component Features

### Header Component
- **Responsive Navigation**: Collapsible mobile menu with smooth animations
- **Theme Toggle**: Sun/Moon icon for switching between light and dark modes
- **Dropdown Menus**: Multi-level navigation with Services and Solutions
- **Scroll Effects**: Background changes on scroll for better UX
- **Theme-Aware Logo**: Automatically adjusts between black and white based on theme

### Footer Component
- **Company Information**: Logo, description, and contact details
- **Organized Links**: Categorized navigation links for easy access
- **Social Media**: Interactive social media icons with hover effects
- **Scroll to Top**: Smooth scroll functionality with animated button
- **Responsive Grid**: Adapts layout for different screen sizes

### Theme System
- **Automatic Detection**: Detects user's preferred color scheme
- **Persistent Storage**: Remembers user's theme preference
- **Smooth Transitions**: CSS transitions for theme switching
- **Consistent Colors**: Maintains brand colors across themes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cee-company
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Colors and Theme
The design system uses a comprehensive color palette defined in `tailwind.config.js`:

- **Primary Colors**: Blue tones for main actions and branding
- **Secondary Colors**: Gray tones for text and backgrounds
- **Accent Colors**: Purple tones for highlights and special elements

### Logo Customization
The company logo automatically adapts to the current theme:
- **Light Mode**: Blue gradient with white text
- **Dark Mode**: White gradient with dark text

To customize the logo, modify the logo section in both `Header.tsx` and `Footer.tsx`.

### Adding New Pages
1. Create new page files in `src/app/`
2. Use the `Layout` component to wrap your content
3. Add navigation links to the Header component

## 🔧 Development

### Code Style
- **TypeScript**: Strict mode enabled for better type safety
- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Consistent code formatting
- **Component Structure**: Functional components with proper TypeScript interfaces

### Adding New Components
1. Create component file in appropriate directory
2. Export as default function
3. Add proper TypeScript interfaces
4. Use the `cn()` utility for class merging
5. Follow the established naming conventions

### Styling Guidelines
- Use Tailwind CSS utility classes
- Leverage the custom design system colors
- Maintain consistent spacing with the `section-padding` class
- Use responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Typography
- **Primary Font**: Inter (body text)
- **Display Font**: Poppins (headings)

### Spacing
- **Section Padding**: 64px (mobile) to 96px (desktop)
- **Container Max Width**: 1280px
- **Grid Gaps**: 8px, 16px, 32px, 64px

### Animations
- **Duration**: 200ms, 300ms, 500ms, 800ms
- **Easing**: ease-in-out, ease-out
- **Hover Effects**: Scale, translate, color transitions

## 🚀 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Google Fonts with display swap
- **CSS Optimization**: Tailwind CSS purging for production
- **Bundle Analysis**: Built-in bundle analyzer

## 🔮 Future Enhancements

- **Three.js Integration**: 3D product showcases and interactive experiences
- **CMS Integration**: Content management system for easy updates
- **Blog System**: Company blog with markdown support
- **E-commerce**: Product catalog and shopping functionality
- **Analytics**: User behavior tracking and insights
- **SEO Optimization**: Advanced SEO features and meta management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: hello@ceecompany.com
- Phone: +1 (555) 123-4567
- Website: [ceecompany.com](https://ceecompany.com)

---

Built with ❤️ by the CEE Company team
