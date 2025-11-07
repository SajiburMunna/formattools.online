import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const postData = {
  title: "Color Theory for Developers: HEX, RGB, and HSL Explained",
  slug: "color-theory-developers",
  excerpt:
    "Understanding different color formats and when to use each one. A practical guide for web developers and designers.",
  date: "2025-01-05",
  readTime: "6 min read",
  category: "Tutorial",
  author: {
    name: "FormatTools Team",
    url: siteConfig.url,
  },
  lastModified: "2025-01-05",
};

export const metadata: Metadata = {
  title: `${postData.title} | ${siteConfig.name}`,
  description: postData.excerpt,
  keywords: [
    "color theory",
    "HEX colors",
    "RGB colors",
    "HSL colors",
    "color formats",
    "web colors",
    "CSS colors",
    "color conversion",
    "color picker",
    "color codes",
    "web design colors",
    "developer color guide",
    "RGB to HEX",
    "HEX to RGB",
    "color formats explained",
  ],
  authors: [{ name: postData.author.name }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/blog/${postData.slug}`,
  },
  openGraph: {
    title: postData.title,
    description: postData.excerpt,
    url: `${siteConfig.url}/blog/${postData.slug}`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: postData.title,
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: postData.date,
    modifiedTime: postData.lastModified,
    authors: [postData.author.name],
    section: postData.category,
    tags: [
      "Color Theory",
      "Web Development",
      "CSS",
      "Design",
      "Frontend Development",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: postData.title,
    description: postData.excerpt,
    images: [`${siteConfig.url}/og-image.png`],
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured Data for Article
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: postData.title,
  description: postData.excerpt,
  image: `${siteConfig.url}/og-image.png`,
  datePublished: postData.date,
  dateModified: postData.lastModified,
  author: {
    "@type": "Organization",
    name: postData.author.name,
    url: postData.author.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/og-image.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/blog/${postData.slug}`,
  },
  articleSection: postData.category,
  keywords: [
    "color theory",
    "HEX colors",
    "RGB colors",
    "HSL colors",
    "web development",
  ],
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteConfig.url}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: postData.title,
      item: `${siteConfig.url}/blog/${postData.slug}`,
    },
  ],
};

export default function BlogPostPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-500 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100">
              {postData.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-blue-500 font-semibold mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              {postData.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {postData.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {postData.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={postData.date}>
                {new Date(postData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{postData.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By {postData.author.name}</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <a href="#introduction" className="hover:text-blue-500">
                Introduction to Color Formats
              </a>
            </li>
            <li>
              <a href="#hex-colors" className="hover:text-blue-500">
                HEX Colors
              </a>
            </li>
            <li>
              <a href="#rgb-colors" className="hover:text-blue-500">
                RGB Colors
              </a>
            </li>
            <li>
              <a href="#hsl-colors" className="hover:text-blue-500">
                HSL Colors
              </a>
            </li>
            <li>
              <a href="#when-to-use" className="hover:text-blue-500">
                When to Use Each Format
              </a>
            </li>
            <li>
              <a href="#color-conversion" className="hover:text-blue-500">
                Converting Between Formats
              </a>
            </li>
            <li>
              <a href="#css-color-usage" className="hover:text-blue-500">
                Using Colors in CSS
              </a>
            </li>
            <li>
              <a href="#best-practices" className="hover:text-blue-500">
                Color Best Practices
              </a>
            </li>
            <li>
              <a href="#tools-and-resources" className="hover:text-blue-500">
                Tools and Resources
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section id="introduction">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Introduction to Color Formats
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Colors are fundamental to web design and development.
              Understanding different color formats is essential for creating
              visually appealing and accessible websites. In web development,
              you&apos;ll encounter three primary color formats: HEX, RGB, and
              HSL.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Each format has its strengths and use cases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <strong>HEX:</strong> Most common in web development, compact
                and easy to share
              </li>
              <li>
                <strong>RGB:</strong> Intuitive for developers, based on light
                mixing
              </li>
              <li>
                <strong>HSL:</strong> Human-friendly, makes color manipulation
                easier
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Let&apos;s dive deep into each format and learn when to use them.
            </p>
          </section>

          <section id="hex-colors">
            <h2 className="text-3xl font-bold mb-4 mt-8">HEX Colors</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              HEX (Hexadecimal) is the most widely used color format in web
              development. It represents colors using a 6-digit hexadecimal
              number preceded by a hash symbol (#).
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Format Structure
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              HEX colors use the format{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                #RRGGBB
              </code>
              , where:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <strong>RR:</strong> Red component (00-FF or 0-255 in decimal)
              </li>
              <li>
                <strong>GG:</strong> Green component (00-FF or 0-255 in decimal)
              </li>
              <li>
                <strong>BB:</strong> Blue component (00-FF or 0-255 in decimal)
              </li>
            </ul>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Examples</h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#FF5733" }}
                  ></div>
                  <div>
                    <code className="text-lg font-mono">#FF5733</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Red-orange color
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#33C3F0" }}
                  ></div>
                  <div>
                    <code className="text-lg font-mono">#33C3F0</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sky blue color
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#2ECC71" }}
                  ></div>
                  <div>
                    <code className="text-lg font-mono">#2ECC71</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Green color
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Short HEX Notation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              When both digits of each color component are the same, you can use
              shorthand notation:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`#FF0000 → #F00  (Red)
#00FF00 → #0F0  (Green)
#0000FF → #00F  (Blue)
#FFFFFF → #FFF  (White)
#000000 → #000  (Black)`}</code>
            </pre>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Advantages:</strong> Compact, widely supported, easy to
                copy and share, standard in design tools.
              </p>
            </div>
          </section>

          <section id="rgb-colors">
            <h2 className="text-3xl font-bold mb-4 mt-8">RGB Colors</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              RGB (Red, Green, Blue) represents colors as combinations of red,
              green, and blue light. Each component ranges from 0 to 255, making
              it intuitive for developers familiar with numeric values.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Format Structure
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              RGB uses the format{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                rgb(red, green, blue)
              </code>
              :
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`rgb(255, 0, 0)     /* Red */
rgb(0, 255, 0)     /* Green */
rgb(0, 0, 255)     /* Blue */
rgb(255, 255, 255) /* White */
rgb(0, 0, 0)       /* Black */`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              RGBA (With Alpha Channel)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              RGBA adds an alpha channel for transparency. The alpha value
              ranges from 0 (fully transparent) to 1 (fully opaque):
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`rgba(255, 0, 0, 1)    /* Fully opaque red */
rgba(255, 0, 0, 0.5)  /* 50% transparent red */
rgba(255, 0, 0, 0)    /* Fully transparent */`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Examples</h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "rgb(255, 87, 51)" }}
                  ></div>
                  <div>
                    <code className="text-lg font-mono">rgb(255, 87, 51)</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Red-orange
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "rgba(51, 195, 240, 0.7)" }}
                  ></div>
                  <div>
                    <code className="text-lg font-mono">
                      rgba(51, 195, 240, 0.7)
                    </code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Semi-transparent blue
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Advantages:</strong> Intuitive numeric values, supports
                transparency with RGBA, easy to manipulate programmatically.
              </p>
            </div>
          </section>

          <section id="hsl-colors">
            <h2 className="text-3xl font-bold mb-4 mt-8">HSL Colors</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              HSL (Hue, Saturation, Lightness) is the most human-friendly color
              format. It represents colors in a way that aligns with how humans
              perceive color, making it easier to create color variations and
              palettes.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Format Structure
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              HSL uses the format{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                hsl(hue, saturation%, lightness%)
              </code>
              :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <strong>Hue:</strong> 0-360 degrees (color wheel position)
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>0° = Red</li>
                  <li>120° = Green</li>
                  <li>240° = Blue</li>
                </ul>
              </li>
              <li>
                <strong>Saturation:</strong> 0-100% (intensity of color)
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>0% = Grayscale</li>
                  <li>100% = Full color</li>
                </ul>
              </li>
              <li>
                <strong>Lightness:</strong> 0-100% (brightness)
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>0% = Black</li>
                  <li>50% = Normal</li>
                  <li>100% = White</li>
                </ul>
              </li>
            </ul>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Examples</h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`hsl(0, 100%, 50%)    /* Pure red */
hsl(120, 100%, 50%)  /* Pure green */
hsl(240, 100%, 50%)  /* Pure blue */
hsl(0, 0%, 50%)      /* Gray */
hsl(210, 100%, 50%)  /* Sky blue */`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              HSLA (With Alpha Channel)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Like RGBA, HSLA adds transparency:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`hsla(210, 100%, 50%, 1)    /* Fully opaque */
hsla(210, 100%, 50%, 0.5)  /* 50% transparent */
hsla(210, 100%, 50%, 0)    /* Fully transparent */`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Why HSL is Powerful
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              HSL makes it easy to create color variations:
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold mb-2">
                  Creating Lighter/Darker Shades:
                </h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm">
                  <code>{`/* Base color */
hsl(210, 100%, 50%)

/* Lighter version - increase lightness */
hsl(210, 100%, 70%)

/* Darker version - decrease lightness */
hsl(210, 100%, 30%)`}</code>
                </pre>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold mb-2">Creating Muted Colors:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm">
                  <code>{`/* Vibrant */
hsl(210, 100%, 50%)

/* Muted - decrease saturation */
hsl(210, 50%, 50%)

/* Very muted */
hsl(210, 20%, 50%)`}</code>
                </pre>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Advantages:</strong> Human-friendly, easy to create
                color variations, intuitive for design work, perfect for
                theming.
              </p>
            </div>
          </section>

          <section id="when-to-use">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              When to Use Each Format
            </h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">
                  Use HEX When:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Working with design tools (Figma, Sketch, Photoshop)</li>
                  <li>Sharing colors with team members</li>
                  <li>Writing CSS for static colors</li>
                  <li>You need compact, readable color values</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">
                  Use RGB/RGBA When:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>You need transparency (use RGBA)</li>
                  <li>Manipulating colors programmatically</li>
                  <li>Working with JavaScript color manipulation</li>
                  <li>Creating dynamic color effects</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">
                  Use HSL/HSLA When:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Creating color themes and variations</li>
                  <li>Building design systems</li>
                  <li>You need to adjust brightness or saturation</li>
                  <li>Creating accessible color palettes</li>
                  <li>Working with CSS custom properties (variables)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="color-conversion">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Converting Between Formats
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Converting between color formats is essential when working with
              different tools and systems. Here are some quick conversion
              formulas:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">HEX to RGB</h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`#FF5733
FF = 255 (Red)
57 = 87  (Green)
33 = 51  (Blue)
→ rgb(255, 87, 51)`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">RGB to HEX</h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`rgb(255, 87, 51)
255 → FF
87  → 57
51  → 33
→ #FF5733`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              While manual conversion is possible, using a{" "}
              <Link
                href="/tools/color-converter"
                className="text-blue-500 hover:underline font-semibold"
              >
                color converter tool
              </Link>{" "}
              is much faster and eliminates errors.
            </p>
          </section>

          <section id="css-color-usage">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Using Colors in CSS
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              All three formats work seamlessly in CSS. Here&apos;s how to use
              them:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Basic Usage</h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`.element {
  /* HEX */
  color: #FF5733;
  background-color: #33C3F0;
  
  /* RGB */
  color: rgb(255, 87, 51);
  background-color: rgb(51, 195, 240);
  
  /* HSL */
  color: hsl(9, 100%, 60%);
  background-color: hsl(195, 100%, 60%);
}`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              With Transparency
            </h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`.element {
  /* RGBA */
  background-color: rgba(255, 87, 51, 0.5);
  
  /* HSLA */
  background-color: hsla(9, 100%, 60%, 0.5);
  
  /* HEX with alpha (modern browsers) */
  background-color: #FF573380; /* 80 = 50% opacity */
}`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              With CSS Variables
            </h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`:root {
  --primary-color: #FF5733;
  --primary-rgb: 255, 87, 51;
  --primary-hsl: 9, 100%, 60%;
}

.button {
  background-color: var(--primary-color);
  box-shadow: 0 4px 6px rgba(var(--primary-rgb), 0.3);
  border: 2px solid hsl(var(--primary-hsl));
}`}</code>
            </pre>
          </section>

          <section id="best-practices">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Color Best Practices
            </h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">1. Maintain Consistency</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use a consistent color format throughout your project. HEX is
                  most common, but HSL works great for theming.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">2. Use CSS Variables</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Store colors in CSS custom properties for easy theming and
                  maintenance. This makes it simple to switch between light and
                  dark modes.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">3. Ensure Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always check color contrast ratios. Use tools to verify that
                  text is readable against background colors (WCAG AA requires
                  4.5:1 for normal text).
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  4. Prefer HSL for Theming
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When building themes or color systems, HSL makes it easier to
                  create variations by adjusting lightness and saturation.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">5. Document Your Colors</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Create a color palette document or use design tokens to
                  document your color system. Include all formats for
                  flexibility.
                </p>
              </div>
            </div>
          </section>

          <section id="tools-and-resources">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Tools and Resources
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Working with colors is easier with the right tools:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/color-converter"
                    className="text-blue-500 hover:underline"
                  >
                    Color Converter Tool
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Convert between HEX, RGB, HSL, HSV, and CMYK formats
                  instantly. Free online tool with live preview.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/gradient-generator"
                    className="text-blue-500 hover:underline"
                  >
                    Gradient Generator
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Create beautiful gradients using any color format. Perfect for
                  finding complementary colors.
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              For more developer tools, check out our{" "}
              <Link
                href="/"
                className="text-blue-500 hover:underline font-semibold"
              >
                complete collection of free online formatters
              </Link>
              .
            </p>
          </section>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Convert Colors Instantly
            </h2>
            <p className="mb-6 text-blue-100">
              Use our free color converter to switch between HEX, RGB, HSL, and
              other formats with ease.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-500 hover:bg-gray-100"
            >
              <Link
                href="/tools/color-converter"
                className="flex items-center gap-2"
              >
                Try Color Converter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/css-gradients-guide"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                Creating Beautiful CSS Gradients: A Complete Guide
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Master the art of CSS gradients for your web projects.
              </p>
            </Link>
            <Link
              href="/blog/json-formatter-guide"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                Complete Guide to JSON Formatting and Validation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn everything about JSON formatting and best practices.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
