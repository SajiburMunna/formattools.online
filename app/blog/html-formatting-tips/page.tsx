import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const postData = {
  title: "HTML Formatting Best Practices for Clean Code",
  slug: "html-formatting-tips",
  excerpt:
    "Discover essential HTML formatting techniques that make your code more readable, maintainable, and SEO-friendly.",
  date: "2024-12-28",
  readTime: "5 min read",
  category: "Web Development",
  author: {
    name: "FormatTools Team",
    url: siteConfig.url,
  },
  lastModified: "2024-12-28",
};

export const metadata: Metadata = {
  title: `${postData.title} | ${siteConfig.name}`,
  description: postData.excerpt,
  keywords: [
    "HTML formatting",
    "HTML beautifier",
    "HTML prettifier",
    "HTML best practices",
    "clean HTML code",
    "HTML indentation",
    "HTML structure",
    "HTML validation",
    "HTML formatting tool",
    "web development",
    "HTML code quality",
    "HTML standards",
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
      "HTML",
      "Web Development",
      "Code Quality",
      "Best Practices",
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
    "HTML formatting",
    "HTML beautifier",
    "HTML best practices",
    "web development",
    "code quality",
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
              <a href="#why-format-html" className="hover:text-blue-500">
                Why Format HTML?
              </a>
            </li>
            <li>
              <a href="#indentation-rules" className="hover:text-blue-500">
                Indentation Rules
              </a>
            </li>
            <li>
              <a href="#element-structure" className="hover:text-blue-500">
                Element Structure
              </a>
            </li>
            <li>
              <a href="#attribute-formatting" className="hover:text-blue-500">
                Attribute Formatting
              </a>
            </li>
            <li>
              <a href="#semantic-html" className="hover:text-blue-500">
                Semantic HTML
              </a>
            </li>
            <li>
              <a
                href="#accessibility-considerations"
                className="hover:text-blue-500"
              >
                Accessibility Considerations
              </a>
            </li>
            <li>
              <a href="#seo-best-practices" className="hover:text-blue-500">
                SEO Best Practices
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
          <section id="why-format-html">
            <h2 className="text-3xl font-bold mb-4 mt-8">Why Format HTML?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Properly formatted HTML code offers numerous benefits for
              developers, teams, and end users:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <strong>Readability:</strong> Well-formatted code is easier to
                read and understand, reducing cognitive load
              </li>
              <li>
                <strong>Maintainability:</strong> Consistent formatting makes it
                easier to maintain and update code over time
              </li>
              <li>
                <strong>Collaboration:</strong> Standardized formatting improves
                team collaboration and code reviews
              </li>
              <li>
                <strong>Debugging:</strong> Proper indentation helps identify
                structural issues quickly
              </li>
              <li>
                <strong>SEO:</strong> Clean, semantic HTML improves search
                engine optimization
              </li>
              <li>
                <strong>Accessibility:</strong> Well-structured HTML enhances
                screen reader compatibility
              </li>
            </ul>
          </section>

          <section id="indentation-rules">
            <h2 className="text-3xl font-bold mb-4 mt-8">Indentation Rules</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Consistent indentation is crucial for readable HTML. Here are the
              standard practices:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Use 2 Spaces (Recommended)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Two spaces per indentation level is the most common standard:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<div>
  <header>
    <nav>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </nav>
  </header>
</div>`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Indent Nested Elements
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Always indent child elements to show hierarchy:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">✅ Good:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<section>
  <h2>Title</h2>
  <p>Content</p>
  <div>
    <span>Nested</span>
  </div>
</section>`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">❌ Bad:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<section>
<h2>Title</h2>
<p>Content</p>
<div>
<span>Nested</span>
</div>
</section>`}</code>
                </pre>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Self-Closing Tags
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Self-closing tags should be on a single line:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<img src="image.jpg" alt="Description" />
<br />
<input type="text" name="username" />
<hr />`}</code>
            </pre>
          </section>

          <section id="element-structure">
            <h2 className="text-3xl font-bold mb-4 mt-8">Element Structure</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Follow these guidelines for element structure:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Opening and Closing Tags
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Always close tags properly and keep them aligned:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<article>
  <h1>Article Title</h1>
  <p>Article content goes here.</p>
</article>`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Block vs Inline Elements
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Block elements start on a new line, inline elements stay on the
              same line:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<!-- Block elements -->
<div>
  <p>Paragraph</p>
  <section>Section</section>
</div>

<!-- Inline elements -->
<p>This is <strong>bold</strong> and <em>italic</em> text.</p>`}</code>
            </pre>
          </section>

          <section id="attribute-formatting">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Attribute Formatting
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Consistent attribute formatting improves readability:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Single Line Attributes
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              For elements with few attributes, keep them on one line:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<a href="/about" class="link">About</a>
<img src="photo.jpg" alt="Photo" width="300" height="200" />`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Multi-Line Attributes
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              For elements with many attributes, put each on its own line:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<button
  type="submit"
  class="btn btn-primary"
  id="submit-btn"
  aria-label="Submit form"
  disabled
>
  Submit
</button>`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Attribute Order
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Follow a consistent attribute order:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>ID and class</li>
              <li>Data attributes</li>
              <li>ARIA attributes</li>
              <li>Event handlers</li>
              <li>Other attributes</li>
            </ol>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<input
  id="email"
  class="form-input"
  type="email"
  name="email"
  placeholder="Enter email"
  required
  aria-label="Email address"
/>`}</code>
            </pre>
          </section>

          <section id="semantic-html">
            <h2 className="text-3xl font-bold mb-4 mt-8">Semantic HTML</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Use semantic HTML elements to convey meaning and improve
              accessibility:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">✅ Use Semantic Elements</h3>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm">
                  <code>{`<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>`}</code>
                </pre>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">❌ Avoid Generic Divs</h3>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm">
                  <code>{`<div class="header">
<div class="nav">
<div class="main">
<div class="section">`}</code>
                </pre>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Semantic Example
            </h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
  
  <aside>
    <h2>Related</h2>
    <p>Sidebar content...</p>
  </aside>
</main>

<footer>
  <p>&copy; 2025 Company</p>
</footer>`}</code>
            </pre>
          </section>

          <section id="accessibility-considerations">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Accessibility Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Proper HTML formatting enhances accessibility:
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">1. Use Alt Text</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always include descriptive alt attributes for images:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded mt-2 text-sm">
                  <code>{`<img src="logo.png" alt="Company Logo" />`}</code>
                </pre>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  2. Proper Heading Hierarchy
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use heading levels in order (h1, h2, h3, etc.):
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded mt-2 text-sm">
                  <code>{`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>`}</code>
                </pre>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">3. ARIA Labels</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use ARIA attributes when semantic HTML isn&apos;t enough:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded mt-2 text-sm">
                  <code>{`<button aria-label="Close dialog">×</button>
<div role="alert" aria-live="polite">Message</div>`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="seo-best-practices">
            <h2 className="text-3xl font-bold mb-4 mt-8">SEO Best Practices</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Well-formatted HTML improves SEO:
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">1. Meta Tags</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Include proper meta tags in the head:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm">
                  <code>{`<head>
  <title>Page Title</title>
  <meta name="description" content="Page description" />
  <meta name="keywords" content="keyword1, keyword2" />
</head>`}</code>
                </pre>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">2. Semantic Structure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use semantic HTML elements that search engines understand
                  better.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">3. Clean Code</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Remove unnecessary comments, whitespace, and formatting that
                  can bloat file size.
                </p>
              </div>
            </div>
          </section>

          <section id="tools-and-resources">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Tools and Resources
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Here are some excellent tools for HTML formatting:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/html-beautifier"
                    className="text-blue-500 hover:underline"
                  >
                    HTML Beautifier
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Free online tool to format and beautify HTML code instantly.
                  Fixes indentation and structure automatically.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">HTML Validator</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Validate your HTML to ensure it follows standards and is
                  error-free.
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
              Format Your HTML Code Instantly
            </h2>
            <p className="mb-6 text-blue-100">
              Use our free HTML beautifier to clean up and format your HTML code
              in seconds.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-500 hover:bg-gray-100"
            >
              <Link
                href="/tools/html-beautifier"
                className="flex items-center gap-2"
              >
                Try HTML Beautifier
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
            <Link
              href="/blog/svg-optimization"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                SVG Optimization: Reducing File Size
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn how to optimize SVG files for web use.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
