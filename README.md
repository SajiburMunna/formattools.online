# FormatTools.online - Free Online Formatters & Converters

A modern, SEO-optimized web application providing free online formatting and conversion tools for developers.

## 🚀 Features

- **100% Frontend-Only**: No backend required, all processing happens in the browser
- **SEO-Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **AdSense Ready**: Strategic ad placements for monetization
- **Modern UI**: Built with Next.js 16, Shadcn/UI, and Tailwind CSS
- **PWA Support**: Installable as a Progressive Web App
- **Privacy-First**: All data processing happens locally in your browser
- **Fast & Responsive**: Optimized for Core Web Vitals

## 🛠️ Available Tools

All 8 tools are now fully functional! ✅

1. **JSON Formatter** ✅ - Beautify, minify, and validate JSON
2. **CSV to JSON Converter** ✅ - Convert CSV files to JSON format
3. **HTML Beautifier** ✅ - Format and minify HTML code
4. **Color Converter** ✅ - Convert between HEX, RGB, HSL, HSV, CMYK
5. **Gradient Generator** ✅ - Create CSS gradients with live preview
6. **SVG Cleaner** ✅ - Optimize and minify SVG files
7. **Markdown Previewer** ✅ - Live Markdown to HTML preview
8. **SQL Beautifier** ✅ - Format SQL queries with syntax highlighting

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: Shadcn/UI + Tailwind CSS 4
- **Code Editor**: Monaco Editor
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
formattools-online/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── tools/             # Tool pages
├── components/
│   ├── layout/            # Header, Footer, AdSense
│   ├── tools/             # Tool components
│   ├── seo/               # SEO utilities
│   └── ui/                # Shadcn UI components
├── features/
│   └── formatters/        # Tool logic (JSON, CSV, HTML)
├── lib/
│   ├── seo-config.ts      # SEO configuration
│   └── utils.ts           # Utility functions
└── public/                # Static assets

```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm/pnpm/yarn/bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 SEO Features

### Meta Tags

- Title templates for all pages
- Comprehensive descriptions with keywords
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Structured Data

- JSON-LD schema for WebApplication
- Rich snippets for tools
- Organization schema

### Performance

- Static page generation where possible
- Lazy-loaded Monaco Editor
- Optimized images and fonts
- Core Web Vitals optimized

### Sitemap & Robots

- Dynamic XML sitemap
- Robots.txt configuration
- Automatic indexing setup

## 💰 AdSense Integration

Ad placements are strategically positioned for optimal user experience:

1. **Hero Banner**: Desktop-only, top of homepage
2. **In-Feed Ads**: Between tool cards (after 6th card)
3. **Sidebar Ads**: Right sidebar on tool pages (desktop/xl screens)
4. **Mobile Banners**: Mobile-optimized banner ads

**Important**: Replace `ca-pub-XXXXXXXXXXXXXXXXX` in `app/layout.tsx` and `components/layout/adsense.tsx` with your actual AdSense Publisher ID.

## 🔧 Adding New Tools

1. **Create formatter logic** in `features/formatters/`
2. **Add tool config** to `lib/seo-config.ts`
3. **Create tool page** in `app/tools/[tool-name]/`
4. **Create client component** for the tool UI
5. Tool automatically appears on homepage!

Example:

```typescript
// lib/seo-config.ts
{
  id: "xml-formatter",
  name: "XML Formatter",
  description: "Format and beautify XML",
  longDescription: "Free online XML formatter...",
  icon: "code",
  path: "/tools/xml-formatter",
  keywords: ["xml", "formatter"],
  category: "code"
}
```

## 📊 Performance Optimization

- **Monaco Editor**: Lazy-loaded to reduce initial bundle
- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Preconnect to Google Fonts
- **Code Splitting**: Automatic route-based code splitting
- **Client-Side Processing**: No server roundtrips for tools

## 🔒 Privacy & Security

- All data processing happens in the browser
- No data sent to servers
- No tracking (except AdSense if enabled)
- No user accounts or authentication required
- Open source and transparent

## 📱 PWA Support

The app can be installed as a Progressive Web App:

- Manifest.json configured
- Service worker ready (optional)
- Installable on mobile and desktop
- Shortcuts to popular tools

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Website: https://formattools.online
- Issues: GitHub Issues

## 🎨 Customization

### Themes

The app supports dark/light mode with automatic theme switching. Customize colors in `app/globals.css`.

### Branding

Update logo and branding in:

- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `lib/seo-config.ts`

### SEO

Update SEO configuration in `lib/seo-config.ts`:

- Site name and description
- Keywords
- Social media handles
- URLs

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static export:

```bash
npm run build
```

Deploy the `.next` folder to any hosting provider.

## 📈 Analytics

Add analytics by updating `app/layout.tsx`:

- Google Analytics
- Plausible Analytics
- Custom analytics solution

---

Made with ❤️ using Next.js + Shadcn/UI
