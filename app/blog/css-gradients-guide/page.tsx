import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const postData = {
  title: "Creating Beautiful CSS Gradients: A Complete Guide",
  slug: "css-gradients-guide",
  excerpt:
    "Master the art of CSS gradients. Learn how to create stunning linear and radial gradients for your web projects.",
  date: "2025-01-10",
  readTime: "7 min read",
  category: "Design",
  author: {
    name: "FormatTools Team",
    url: siteConfig.url,
  },
  lastModified: "2025-01-10",
};

export const metadata: Metadata = {
  title: `${postData.title} | ${siteConfig.name}`,
  description: postData.excerpt,
  keywords: [
    "CSS gradients",
    "linear gradient",
    "radial gradient",
    "CSS gradient generator",
    "gradient CSS",
    "CSS background gradient",
    "gradient tutorial",
    "web design gradients",
    "CSS gradient examples",
    "gradient colors",
    "conic gradient",
    "repeating gradient",
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
    tags: ["CSS", "Gradients", "Web Design", "Frontend Development", "Styling"],
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
    "CSS gradients",
    "linear gradient",
    "radial gradient",
    "CSS gradient tutorial",
    "web design",
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
              <a href="#what-are-css-gradients" className="hover:text-blue-500">
                What are CSS Gradients?
              </a>
            </li>
            <li>
              <a href="#linear-gradients" className="hover:text-blue-500">
                Linear Gradients
              </a>
            </li>
            <li>
              <a href="#radial-gradients" className="hover:text-blue-500">
                Radial Gradients
              </a>
            </li>
            <li>
              <a href="#conic-gradients" className="hover:text-blue-500">
                Conic Gradients
              </a>
            </li>
            <li>
              <a href="#repeating-gradients" className="hover:text-blue-500">
                Repeating Gradients
              </a>
            </li>
            <li>
              <a
                href="#gradient-best-practices"
                className="hover:text-blue-500"
              >
                Gradient Best Practices
              </a>
            </li>
            <li>
              <a href="#common-use-cases" className="hover:text-blue-500">
                Common Use Cases
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
          <section id="what-are-css-gradients">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              What are CSS Gradients?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              CSS gradients are smooth transitions between two or more colors.
              They allow you to create visually appealing backgrounds, buttons,
              and UI elements without using images. Gradients are rendered by
              the browser, making them lightweight, scalable, and perfect for
              modern web design.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              CSS gradients offer several advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>No image files needed - reduces HTTP requests</li>
              <li>Scalable and resolution-independent</li>
              <li>Easy to modify with CSS</li>
              <li>Better performance than background images</li>
              <li>Support for multiple color stops</li>
              <li>Can be animated and transitioned</li>
            </ul>
          </section>

          <section id="linear-gradients">
            <h2 className="text-3xl font-bold mb-4 mt-8">Linear Gradients</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Linear gradients transition colors along a straight line. They are
              the most commonly used gradient type and can be oriented in any
              direction.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Basic Syntax</h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`background: linear-gradient(direction, color1, color2);`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Direction Examples
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Top to Bottom (Default):</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: linear-gradient(to bottom, #ff6b6b, #4ecdc4);
/* or simply */
background: linear-gradient(#ff6b6b, #4ecdc4);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Left to Right:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: linear-gradient(to right, #667eea, #764ba2);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Diagonal:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: linear-gradient(to bottom right, #f093fb, #f5576c);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Using Angles:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: linear-gradient(45deg, #fa709a, #fee140);
background: linear-gradient(90deg, #30cfd0, #330867);
background: linear-gradient(180deg, #a8edea, #fed6e3);`}</code>
                </pre>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Multiple Color Stops
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              You can add multiple colors to create more complex gradients:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`background: linear-gradient(
  to right,
  #ff6b6b 0%,
  #4ecdc4 50%,
  #45b7d1 100%
);`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Color stops can be specified in percentages or pixels, giving you
              precise control over where each color appears in the gradient.
            </p>
          </section>

          <section id="radial-gradients">
            <h2 className="text-3xl font-bold mb-4 mt-8">Radial Gradients</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Radial gradients radiate outward from a central point, creating
              circular or elliptical color transitions. They are perfect for
              creating spotlight effects, buttons, and circular backgrounds.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Basic Syntax</h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`background: radial-gradient(shape size at position, color1, color2);`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Examples</h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Circular (Default):</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: radial-gradient(circle, #667eea, #764ba2);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Elliptical:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: radial-gradient(ellipse, #f093fb, #f5576c);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Positioned Gradient:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: radial-gradient(
  circle at top left,
  #fa709a,
  #fee140
);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">With Size Control:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: radial-gradient(
  circle closest-side at 50% 50%,
  #30cfd0,
  #330867
);`}</code>
                </pre>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Size keywords include:{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                closest-side
              </code>
              ,{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                farthest-side
              </code>
              ,{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                closest-corner
              </code>
              , and{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                farthest-corner
              </code>
              .
            </p>
          </section>

          <section id="conic-gradients">
            <h2 className="text-3xl font-bold mb-4 mt-8">Conic Gradients</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Conic gradients rotate around a center point, creating pie-chart
              or color wheel effects. They are perfect for creating loading
              spinners, color wheels, and modern UI elements.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Basic Syntax</h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`background: conic-gradient(from angle at position, color1, color2);`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Examples</h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Simple Conic Gradient:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: conic-gradient(#f093fb, #f5576c, #4facfe, #00f2fe);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">With Starting Angle:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: conic-gradient(
  from 45deg,
  #667eea,
  #764ba2,
  #f093fb,
  #f5576c
);`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Color Wheel Effect:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`background: conic-gradient(
  from 0deg,
  red,
  yellow,
  lime,
  aqua,
  blue,
  magenta,
  red
);`}</code>
                </pre>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> Conic gradients have excellent browser
                support in modern browsers but may require fallbacks for older
                browsers.
              </p>
            </div>
          </section>

          <section id="repeating-gradients">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Repeating Gradients
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Repeating gradients allow you to create patterns by repeating a
              gradient segment. This is useful for creating stripes, patterns,
              and textured backgrounds.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Repeating Linear Gradient
            </h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`background: repeating-linear-gradient(
  45deg,
  #667eea,
  #667eea 10px,
  #764ba2 10px,
  #764ba2 20px
);`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Repeating Radial Gradient
            </h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`background: repeating-radial-gradient(
  circle,
  #f093fb 0,
  #f093fb 10px,
  #f5576c 10px,
  #f5576c 20px
);`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Repeating gradients are perfect for creating subtle patterns,
              backgrounds, and visual textures without using image files.
            </p>
          </section>

          <section id="gradient-best-practices">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Gradient Best Practices
            </h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  1. Choose Complementary Colors
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Select colors that work well together. Use color theory
                  principles - complementary, analogous, or triadic color
                  schemes work best for gradients.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">2. Maintain Readability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ensure text remains readable over gradients. Use darker
                  gradients for light text or add text shadows/overlays for
                  better contrast.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  3. Use Subtle Transitions
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Avoid harsh color transitions. Smooth, subtle gradients look
                  more professional and are easier on the eyes.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">4. Consider Performance</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gradients are GPU-accelerated and perform well, but complex
                  repeating gradients on large elements may impact performance.
                  Test on various devices.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">5. Provide Fallbacks</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always provide a solid color fallback for older browsers that
                  don&apos;t support gradients.
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded mt-2 text-sm">
                  <code>{`background: #667eea; /* Fallback */
background: linear-gradient(to right, #667eea, #764ba2);`}</code>
                </pre>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">6. Use CSS Variables</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Store gradient colors in CSS variables for easy theming and
                  maintenance.
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded mt-2 text-sm">
                  <code>{`:root {
  --gradient-start: #667eea;
  --gradient-end: #764ba2;
}
.hero {
  background: linear-gradient(
    to right,
    var(--gradient-start),
    var(--gradient-end)
  );
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="common-use-cases">
            <h2 className="text-3xl font-bold mb-4 mt-8">Common Use Cases</h2>
            <div className="space-y-6 mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Hero Sections</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Create eye-catching hero sections with vibrant gradients:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`.hero {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}`}</code>
                </pre>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Buttons</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Add depth and visual interest to buttons:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`.btn-gradient {
  background: linear-gradient(45deg, #f093fb, #f5576c);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: transform 0.2s;
}
.btn-gradient:hover {
  transform: translateY(-2px);
}`}</code>
                </pre>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Cards and Overlays
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Use gradients for card backgrounds and image overlays:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`.card {
  background: radial-gradient(
    circle at top right,
    #667eea,
    #764ba2
  );
  border-radius: 12px;
  padding: 24px;
}

.image-overlay {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.7)
  );
}`}</code>
                </pre>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Loading Spinners
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Create animated loading indicators with conic gradients:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #667eea,
    #764ba2,
    #f093fb,
    #f5576c,
    #667eea
  );
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="tools-and-resources">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Tools and Resources
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Creating perfect gradients can be challenging. Here are some tools
              to help you:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/gradient-generator"
                    className="text-blue-500 hover:underline"
                  >
                    CSS Gradient Generator
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Our free online tool lets you create beautiful linear and
                  radial gradients with a visual editor. Preview in real-time
                  and copy the CSS code instantly.
                </p>
              </div>
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
                  Convert between HEX, RGB, HSL, and other color formats to find
                  the perfect colors for your gradients.
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
              Create Beautiful Gradients Instantly
            </h2>
            <p className="mb-6 text-blue-100">
              Use our free CSS gradient generator to create stunning gradients
              with a visual editor. No coding required!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-500 hover:bg-gray-100"
            >
              <Link
                href="/tools/gradient-generator"
                className="flex items-center gap-2"
              >
                Try Gradient Generator
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
              href="/blog/color-theory-developers"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                Color Theory for Developers: HEX, RGB, and HSL Explained
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Understanding different color formats and when to use each one.
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
