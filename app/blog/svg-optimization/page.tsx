import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const postData = {
  title: "SVG Optimization: Reducing File Size Without Losing Quality",
  slug: "svg-optimization",
  excerpt:
    "Learn how to optimize SVG files for web use, reduce file size, and improve loading performance.",
  date: "2024-12-25",
  readTime: "6 min read",
  category: "Performance",
  author: {
    name: "FormatTools Team",
    url: siteConfig.url,
  },
  lastModified: "2024-12-25",
};

export const metadata: Metadata = {
  title: `${postData.title} | ${siteConfig.name}`,
  description: postData.excerpt,
  keywords: [
    "SVG optimization",
    "SVG minify",
    "SVG cleaner",
    "SVG compression",
    "optimize SVG",
    "SVG file size",
    "SVG performance",
    "SVG best practices",
    "SVG optimizer",
    "web performance",
    "SVG optimization tool",
    "reduce SVG size",
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
      "SVG",
      "Optimization",
      "Web Performance",
      "Frontend Development",
      "Best Practices",
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
    "SVG optimization",
    "SVG minify",
    "SVG compression",
    "web performance",
    "SVG best practices",
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
              <a href="#why-optimize-svg" className="hover:text-blue-500">
                Why Optimize SVG Files?
              </a>
            </li>
            <li>
              <a
                href="#remove-unnecessary-code"
                className="hover:text-blue-500"
              >
                Remove Unnecessary Code
              </a>
            </li>
            <li>
              <a href="#minify-svg" className="hover:text-blue-500">
                Minify SVG Code
              </a>
            </li>
            <li>
              <a href="#optimize-paths" className="hover:text-blue-500">
                Optimize Paths
              </a>
            </li>
            <li>
              <a href="#remove-metadata" className="hover:text-blue-500">
                Remove Metadata
              </a>
            </li>
            <li>
              <a href="#use-inline-svg" className="hover:text-blue-500">
                Use Inline SVG When Appropriate
              </a>
            </li>
            <li>
              <a href="#svg-sprites" className="hover:text-blue-500">
                SVG Sprites and Icons
              </a>
            </li>
            <li>
              <a href="#best-practices" className="hover:text-blue-500">
                Best Practices
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
          <section id="why-optimize-svg">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Why Optimize SVG Files?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              SVG (Scalable Vector Graphics) files are often exported from
              design tools with unnecessary code, metadata, and formatting. This
              can result in file sizes that are 2-10x larger than necessary.
              Optimizing SVGs offers several key benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <strong>Faster Loading:</strong> Smaller files load faster,
                improving page performance and user experience
              </li>
              <li>
                <strong>Reduced Bandwidth:</strong> Less data transfer means
                lower costs and better performance on slow connections
              </li>
              <li>
                <strong>Better SEO:</strong> Faster page loads improve search
                engine rankings
              </li>
              <li>
                <strong>Cleaner Code:</strong> Optimized SVGs are easier to read
                and maintain
              </li>
              <li>
                <strong>Mobile Performance:</strong> Critical for users on
                mobile devices with limited bandwidth
              </li>
            </ul>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Did you know?</strong> A typical SVG file can often be
                reduced by 50-80% in size through optimization without any
                visible quality loss.
              </p>
            </div>
          </section>

          <section id="remove-unnecessary-code">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Remove Unnecessary Code
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Design tools often add unnecessary elements that can be safely
              removed:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              1. Remove Comments
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Comments in SVG files are not needed for rendering:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Before:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<svg>
  <!-- Created with Adobe Illustrator -->
  <!-- Version 1.0 -->
  <path d="M10 10 L20 20"/>
</svg>`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<svg>
  <path d="M10 10 L20 20"/>
</svg>`}</code>
                </pre>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              2. Remove Empty Groups
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Empty &lt;g&gt; elements serve no purpose:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<!-- Remove this -->
<g></g>

<!-- Or this -->
<g>
  <!-- Empty group -->
</g>`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              3. Remove Default Attributes
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Many attributes have default values that don&apos;t need to be
              specified:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<!-- Before -->
<rect fill="#000" stroke="none" stroke-width="0" opacity="1"/>

<!-- After -->
<rect fill="#000"/>`}</code>
            </pre>
          </section>

          <section id="minify-svg">
            <h2 className="text-3xl font-bold mb-4 mt-8">Minify SVG Code</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Minification removes unnecessary whitespace and formatting:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Before (Formatted):</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<svg width="100" height="100">
  <circle
    cx="50"
    cy="50"
    r="40"
    fill="blue"
  />
</svg>`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After (Minified):</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue"/></svg>`}</code>
                </pre>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Minification can reduce file size by 20-40% while maintaining
              identical visual output.
            </p>
          </section>

          <section id="optimize-paths">
            <h2 className="text-3xl font-bold mb-4 mt-8">Optimize Paths</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Path data often contains redundant information that can be
              simplified:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Path Optimization Techniques
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <strong>Remove unnecessary decimals:</strong> Round coordinates
                to reasonable precision (2-3 decimal places)
              </li>
              <li>
                <strong>Use relative coordinates:</strong> Relative commands
                (lowercase) are often shorter than absolute (uppercase)
              </li>
              <li>
                <strong>Combine commands:</strong> Merge consecutive commands
                when possible
              </li>
              <li>
                <strong>Simplify curves:</strong> Remove unnecessary curve
                control points
              </li>
            </ul>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Before:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<path d="M 10.000000 20.000000 L 30.000000 40.000000 L 50.000000 60.000000"/>`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<path d="M10 20l20 20 20 20"/>`}</code>
                </pre>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> Be careful with path optimization as
                aggressive rounding can affect visual quality. Test thoroughly
                after optimization.
              </p>
            </div>
          </section>

          <section id="remove-metadata">
            <h2 className="text-3xl font-bold mb-4 mt-8">Remove Metadata</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Design tools often embed metadata that&apos;s not needed for web
              use:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Common Metadata to Remove
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  &lt;metadata&gt;
                </code>{" "}
                tags
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  &lt;defs&gt;
                </code>{" "}
                with unused definitions
              </li>
              <li>Editor-specific attributes (inkscape, sodipodi, etc.)</li>
              <li>Unused gradients, patterns, and filters</li>
              <li>Version and generator information</li>
            </ul>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Before:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<svg>
  <metadata>
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <path d="M10 10 L20 20"/>
</svg>`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<svg>
  <path d="M10 10 L20 20"/>
</svg>`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="use-inline-svg">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Use Inline SVG When Appropriate
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Inline SVG eliminates HTTP requests and allows CSS styling:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>No additional HTTP request</li>
              <li>Can be styled with CSS</li>
              <li>Can be animated with CSS or JavaScript</li>
              <li>Better for small, frequently used icons</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-3 mt-6">When to Use</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">✅ Use Inline For:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Small icons (&lt; 2KB)</li>
                  <li>Icons used once or twice</li>
                  <li>Icons that need CSS styling</li>
                  <li>Critical above-the-fold content</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">❌ Use External For:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Large SVGs (&gt; 5KB)</li>
                  <li>Icons used multiple times</li>
                  <li>Complex illustrations</li>
                  <li>SVGs that change frequently</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="svg-sprites">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              SVG Sprites and Icons
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              For multiple icons, use SVG sprites to reduce HTTP requests:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              SVG Sprite Example
            </h3>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`<svg style="display: none;">
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </symbol>
  <symbol id="icon-user" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
  </symbol>
</svg>

<!-- Usage -->
<svg><use href="#icon-home"/></svg>
<svg><use href="#icon-user"/></svg>`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Single HTTP request for multiple icons</li>
              <li>Icons can be cached together</li>
              <li>Easy to maintain and update</li>
              <li>Can be styled with CSS</li>
            </ul>
          </section>

          <section id="best-practices">
            <h2 className="text-3xl font-bold mb-4 mt-8">Best Practices</h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  1. Always Optimize Before Production
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Never use SVGs directly from design tools. Always run them
                  through an optimizer first.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">2. Set ViewBox Correctly</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always include a viewBox attribute for proper scaling. Remove
                  fixed width/height when using viewBox.
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded mt-2 text-sm">
                  <code>{`<svg viewBox="0 0 24 24">...</svg>`}</code>
                </pre>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">3. Use CurrentColor</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use currentColor for fill/stroke to allow CSS color control:
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded mt-2 text-sm">
                  <code>{`<path fill="currentColor" d="..."/>`}</code>
                </pre>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">4. Remove Unused IDs</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Clean up IDs that aren&apos;t referenced anywhere in the SVG.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  5. Test After Optimization
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always visually compare the optimized SVG with the original to
                  ensure quality is maintained.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  6. Use Appropriate Precision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For most web use, 1-2 decimal places are sufficient. Higher
                  precision increases file size without visible benefit.
                </p>
              </div>
            </div>
          </section>

          <section id="tools-and-resources">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Tools and Resources
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Here are some excellent tools for SVG optimization:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/svg-cleaner"
                    className="text-blue-500 hover:underline"
                  >
                    SVG Cleaner Tool
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Free online tool to optimize and minify SVG files. Removes
                  unnecessary code, metadata, and reduces file size while
                  maintaining quality.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">SVGOMG</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Popular open-source SVG optimizer with visual preview and
                  customizable optimization settings.
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
              Optimize Your SVG Files Instantly
            </h2>
            <p className="mb-6 text-blue-100">
              Use our free SVG cleaner to reduce file size and improve
              performance without losing quality.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-500 hover:bg-gray-100"
            >
              <Link
                href="/tools/svg-cleaner"
                className="flex items-center gap-2"
              >
                Try SVG Cleaner
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
              href="/blog/html-formatting-tips"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                HTML Formatting Best Practices
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discover essential HTML formatting techniques.
              </p>
            </Link>
            <Link
              href="/blog/css-gradients-guide"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                Creating Beautiful CSS Gradients
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Master the art of CSS gradients for your web projects.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
