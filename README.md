# Nuxt 3 Responsive Mini Dashboard

A modern, responsive dashboard application built with Nuxt 3, Tailwind CSS, and custom shadcn-vue components.

## Features

- 🎨 **Modern UI**: Clean, professional design with shadcn-vue inspired components
- 📱 **Fully Responsive**: Adapts seamlessly to desktop, tablet, and mobile devices
- 🌙 **Dark/Light Mode**: Toggle between light and dark themes
- 📊 **Dashboard Analytics**: Stats cards with dummy data and chart placeholders
- 🔧 **Settings Modal**: User preferences with form validation
- 📁 **Proper Structure**: Uses Nuxt 3 layouts, pages, and composition API
- 🎯 **Accessible**: Built with accessibility best practices

## Component Structure

### Layout Components

- `layouts/default.vue` - Main layout with header, sidebar, and settings modal
- `components/ui/` - Reusable UI components (Button, Card, Dialog, etc.)

### Pages

- `pages/index.vue` - Dashboard home with stats and activity
- `pages/reports.vue` - Reports page with different report types

### Key Features

- **Responsive Sidebar**: Collapsible on mobile with hamburger menu
- **Stats Cards**: Display key metrics with growth indicators
- **Recent Activity**: Live activity feed with timestamps
- **Settings Modal**: User preferences with form controls
- **Theme Toggle**: Switch between light and dark modes

## Setup Instructions

1. **Install dependencies**:

```bash
npm install
```

2. **Start development server**:

```bash
npm run dev
```

3. **Build for production**:

```bash
npm run build
```

4. **Preview production build**:

```bash
npm run preview
```

## Tech Stack

- **Nuxt 3** - Vue.js framework with server-side rendering
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide Vue** - Beautiful icons
- **Class Variance Authority** - Component variant management

## Responsive Design

- **Mobile (< 768px)**: Sidebar becomes hamburger menu, cards stack vertically
- **Tablet (768px - 1024px)**: Sidebar remains collapsible, cards in 2-column grid
- **Desktop (> 1024px)**: Full sidebar always visible, cards in 4-column grid

## Custom Components

The project includes custom shadcn-vue style components:

- `Button` - Versatile button with multiple variants
- `Card` - Container component with header, content, and title
- `Dialog` - Modal component for settings and interactions
- `Input` - Form input with consistent styling
- `Switch` - Toggle switch for settings
- `Label` - Form labels with proper accessibility

## Development Notes

- Uses Nuxt 3 Composition API throughout
- Implements proper TypeScript types
- Follows Vue 3 best practices
- Responsive design with mobile-first approach
- Accessible components with proper ARIA attributes

The dashboard provides a solid foundation for building more complex dashboard applications with real data integration.
