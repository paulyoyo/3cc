# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby 5 website for **3C Capital**, a company focused on factoring and investment opportunities ("Factoring y Oportunidades de Rentabilidad"). The project is in early development stages with minimal components and configuration.

## Development Commands

### Core Commands
- **Start development server**: `npm run develop` (or `gatsby develop`)
  - Opens at http://localhost:8000
  - GraphQL explorer available at http://localhost:8000/___graphql
- **Build for production**: `npm run build` (or `gatsby build`)
  - Outputs to `/public` directory
- **Serve production build**: `npm run serve` (or `gatsby serve`)
  - Test the production build locally
- **Clean cache and build artifacts**: `npm run clean` (or `gatsby clean`)
  - Run this if you encounter build issues or need to clear Gatsby's cache

### Installation
- `npm install` - Install all dependencies

## Project Structure

```
3cc/
├── src/
│   ├── components/
│   │   └── Layout/        # Layout components (currently empty files)
│   │       ├── Layout.js
│   │       ├── Header.js
│   │       └── Footer.js
│   └── pages/
│       └── index.js       # Homepage (file-based routing)
├── static/                # Static assets served directly
├── gatsby-config.js       # Gatsby configuration
└── package.json
```

## Architecture Notes

### Gatsby Routing
- Uses **file-based routing**: files in `src/pages/` automatically become routes
  - `src/pages/index.js` → `/`
  - `src/pages/about.js` → `/about`
  - `src/pages/services/factoring.js` → `/services/factoring`

### Component Organization
- Layout components are located in `src/components/Layout/`
- Currently these files exist but are empty (0 lines) - they need to be implemented

### Site Metadata
Configured in `gatsby-config.js`:
- Title: "3C Capital"
- Description: "Factoring y Oportunidades de Rentabilidad"

### Gatsby Plugins
Currently no plugins are configured. Common plugins you may want to add:
- `gatsby-plugin-image` - Optimized image handling
- `gatsby-plugin-sharp` - Image processing
- `gatsby-source-filesystem` - Local file sourcing
- `gatsby-transformer-remark` - Markdown support
- `gatsby-plugin-manifest` - PWA manifest
- `gatsby-plugin-react-helmet` - Head tag management

### Dependencies
- **Gatsby**: 5.15.0
- **React**: 18.3.1
- **React DOM**: 18.3.1

## Development Guidelines

### Adding New Pages
Create new `.js` or `.jsx` files in `src/pages/` for automatic routing.

### Working with Components
- Reusable components should go in `src/components/`
- Layout components are being organized in `src/components/Layout/`

### Static Assets
Place static files (images, fonts, etc.) in the `static/` directory. They'll be copied to `/public` during build and can be referenced from root path (e.g., `/logo.png`).

### Cache Issues
If you encounter unexpected behavior or stale data, run `npm run clean` to clear Gatsby's cache before rebuilding.
