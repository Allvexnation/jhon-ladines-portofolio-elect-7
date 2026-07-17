# Portfolio

**This is my ELECT 7 Basic HTML lesson project.** While the course requirement focuses on basic HTML only, I chose to advance beyond the fundamentals by implementing this project using modern web frameworks. This project demonstrates how basic HTML concepts can be elevated with contemporary technologies like Next.js, React, and modern CSS frameworks.

A modern, responsive portfolio website built with Next.js, TypeScript, and shadcn/ui. This project demonstrates advanced web development techniques while serving as an educational resource for ELECT 7 Basic HTML concepts using contemporary frameworks and tools.

## Overview

This portfolio project showcases modern web development practices through a clean, minimalist design with dark mode support, glass morphism effects, and smooth animations. It serves as both a professional portfolio and a learning resource for understanding how basic HTML concepts evolve in modern web frameworks.

## Tech Stack

### Core Framework
- **Next.js 16.2.10** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library built on Radix UI
- **React Bits** - Advanced React components and patterns
- **next-themes** - Theme management for dark/light mode
- **Framer Motion 12.42.2** - Animation library
- **Lucide React** - Icon library

### Development Tools
- **Bun** - Fast JavaScript package manager and runtime
- **Prettier 3.9.5** - Code formatting
- **ESLint 9** - Code linting with Next.js configuration
- **PostCSS** - CSS transformation

### Additional Libraries
- **@base-ui/react** - Unstyled React components
- **class-variance-authority** - Component variant management
- **cmdk** - Command menu component
- **date-fns** - Date manipulation
- **embla-carousel-react** - Carousel component
- **input-otp** - One-time password input
- **react-day-picker** - Date picker component
- **react-icons** - Icon collection
- **react-resizable-panels** - Resizable panel components
- **recharts** - Chart library
- **sonner** - Toast notifications
- **tailwind-merge** - Tailwind class merging
- **tw-animate-css** - Tailwind CSS animations

## Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with breakpoints for all screen sizes
- **Dark Mode** - Theme switching with system preference detection
- **Smooth Animations** - Page transitions and element animations using Framer Motion
- **Glass Morphism** - Modern glass-like UI effects
- **TypeScript Support** - Full type safety across the application

### Portfolio Sections
- **Hero Section** - Introduction with location and status indicators
- **Skills Display** - Technology showcase with glass-icon components
- **Projects Showcase** - Interactive project cards with navigation
- **About Me** - Personal information and background
- **Tech Stack** - Detailed technology and tools overview
- **Tutorials** - Educational content and resources
- **Chat Room** - Interactive communication interface
- **Services** - Professional services offering

### UI Components
- **Navigation** - Sidebar navigation with responsive behavior
- **Cards** - Featured section cards with hover effects
- **Icons** - Custom glass-icon components for technologies
- **Theme Provider** - Context-based theme management
- **Form Elements** - Input components with validation

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css        # Global styles and Tailwind imports
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   └── page.tsx           # Home page (redirects to pages/home)
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components (60 items)
│   │   ├── GlassIcons.tsx    # Glass morphism icon components
│   │   ├── SideBar.tsx       # Navigation sidebar
│   │   ├── SkillsCardTechs.tsx # Skills display card
│   │   ├── TechLogoIcon.tsx  # Technology logo icons
│   │   └── theme-provider.tsx # Theme context provider
│   ├── pages/                 # Page components
│   │   └── home.tsx          # Main home page
│   ├── functions/            # Utility functions and hooks
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Library utilities
│   ├── static/               # Static assets and data
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Helper functions
├── public/                    # Static assets
├── components.json           # shadcn/ui configuration
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
├── prettierrc                # Prettier configuration
├── eslint.config.mjs         # ESLint configuration
└── package.json              # Project dependencies
```

## Getting Started

### Prerequisites

- **Bun** - Install Bun from [bun.sh](https://bun.sh)
- **Node.js** - Compatible with Node.js 18+ (via Bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun start` - Start production server
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting

## Configuration

### Prettier Configuration

The project uses Prettier with the following configuration:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}
```

### TypeScript Configuration

TypeScript is configured with:
- Strict mode enabled
- Path aliases (`@/*` maps to `./src/*`)
- React JSX transform
- ES2017 target

### Tailwind CSS Configuration

- Uses Tailwind CSS v4 with PostCSS
- Base Vega style from shadcn/ui
- CSS variables for theming
- Neutral base color

## Development Workflow

### Code Style

- **Formatting** - Run `bun run format` before committing
- **Linting** - Run `bun run lint` to check for issues
- **Type Checking** - TypeScript provides real-time type checking

### Component Development

1. **UI Components** - Use shadcn/ui components from `@/components/ui`
2. **Custom Components** - Add new components to `@/components`
3. **Page Components** - Add pages to `@/pages` or `@/app` for App Router

### Theme Development

- **Colors** - Modify theme colors in `src/app/globals.css`
- **Components** - Use `useTheme()` hook from `@/components/theme-provider`
- **Dark Mode** - Automatically handles system preference

## Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**
2. **Import project in Vercel**
3. **Vercel automatically detects Next.js**
4. **Deploy with default settings**

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- **Netlify** - Use Next.js build plugin
- **Railway** - Direct deployment
- **Docker** - Containerize the application

### Build Output

```bash
bun run build
```

This creates an optimized production build in the `.next` directory.

## Educational Context

This project serves as a modern implementation of ELECT 7 Basic HTML concepts:

### HTML Concepts in Modern Frameworks
- **Semantic HTML** - Implemented through Next.js App Router structure
- **Forms** - Enhanced with React components and validation
- **Media** - Optimized image and asset handling
- **Accessibility** - Built-in through shadcn/ui components
- **Responsive Design** - Tailwind CSS utility classes

### Modern Enhancements
- **Component Architecture** - Reusable, composable components
- **State Management** - React hooks and context
- **Type Safety** - TypeScript interfaces and types
- **Performance** - Code splitting and optimization
- **Developer Experience** - Hot reloading and fast refresh

## Resources

### Learning Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Component Libraries
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Run tests and linting**
5. **Submit a pull request**

## License

This project is private and for educational purposes.

## Support

For questions or issues related to this project, please refer to the course materials or contact the instructor.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
