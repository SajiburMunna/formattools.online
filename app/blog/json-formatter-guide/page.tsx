import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const postData = {
  title: "Complete Guide to JSON Formatting and Validation",
  slug: "json-formatter-guide",
  excerpt:
    "Learn everything about JSON formatting, validation, and best practices for working with JSON data in your projects.",
  date: "2025-01-15",
  readTime: "5 min read",
  category: "Tutorial",
  author: {
    name: "FormatTools Team",
    url: siteConfig.url,
  },
  lastModified: "2025-01-15",
};

export const metadata: Metadata = {
  title: `${postData.title} | ${siteConfig.name}`,
  description: postData.excerpt,
  keywords: [
    "JSON formatter",
    "JSON validator",
    "JSON beautifier",
    "JSON minifier",
    "JSON validation",
    "JSON tutorial",
    "JSON best practices",
    "JSON formatting guide",
    "online JSON tools",
    "JSON syntax",
    "JSON parser",
    "JSON editor",
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
      "JSON",
      "Formatting",
      "Validation",
      "Web Development",
      "Programming",
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
    "JSON formatter",
    "JSON validator",
    "JSON beautifier",
    "JSON formatting",
    "JSON tutorial",
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
              <a href="#what-is-json" className="hover:text-blue-500">
                What is JSON?
              </a>
            </li>
            <li>
              <a href="#why-format-json" className="hover:text-blue-500">
                Why Format JSON?
              </a>
            </li>
            <li>
              <a href="#json-syntax-basics" className="hover:text-blue-500">
                JSON Syntax Basics
              </a>
            </li>
            <li>
              <a href="#formatting-json" className="hover:text-blue-500">
                How to Format JSON
              </a>
            </li>
            <li>
              <a href="#validating-json" className="hover:text-blue-500">
                Validating JSON
              </a>
            </li>
            <li>
              <a href="#best-practices" className="hover:text-blue-500">
                JSON Best Practices
              </a>
            </li>
            <li>
              <a href="#common-errors" className="hover:text-blue-500">
                Common JSON Errors
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
          <section id="what-is-json">
            <h2 className="text-3xl font-bold mb-4 mt-8">What is JSON?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              JSON (JavaScript Object Notation) is a lightweight data
              interchange format that is easy for humans to read and write, and
              easy for machines to parse and generate. It was derived from
              JavaScript but is now language-independent, with parsers available
              for virtually every programming language.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              JSON is commonly used for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>API responses and requests</li>
              <li>Configuration files</li>
              <li>Data storage</li>
              <li>Inter-application communication</li>
              <li>Web application data exchange</li>
            </ul>
          </section>

          <section id="why-format-json">
            <h2 className="text-3xl font-bold mb-4 mt-8">Why Format JSON?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Properly formatted JSON offers several key benefits:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Readability</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Well-formatted JSON is much easier to read and understand,
                    especially when dealing with complex nested structures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Debugging</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Proper indentation and formatting make it easier to identify
                    errors and debug issues in your JSON data.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Maintainability</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Consistent formatting makes code reviews easier and helps
                    maintain code quality across teams.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Version Control</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Formatted JSON produces cleaner diffs in version control
                    systems, making it easier to track changes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="json-syntax-basics">
            <h2 className="text-3xl font-bold mb-4 mt-8">JSON Syntax Basics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              JSON syntax is built on two structures:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                <strong>Objects:</strong> A collection of key-value pairs
                enclosed in curly braces{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {"{}"}
                </code>
              </li>
              <li>
                <strong>Arrays:</strong> An ordered list of values enclosed in
                square brackets{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  []
                </code>
              </li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Here&apos;s a basic example of valid JSON:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isActive": true,
  "hobbies": ["reading", "coding", "traveling"],
  "address": {
    "street": "123 Main St",
    "zipCode": "10001"
  }
}`}</code>
            </pre>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Key JSON rules:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Keys must be strings (enclosed in double quotes)</li>
              <li>
                Values can be strings, numbers, booleans, null, objects, or
                arrays
              </li>
              <li>Strings must use double quotes, not single quotes</li>
              <li>No trailing commas allowed</li>
              <li>No comments allowed</li>
            </ul>
          </section>

          <section id="formatting-json">
            <h2 className="text-3xl font-bold mb-4 mt-8">How to Format JSON</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Formatting JSON involves adding proper indentation, line breaks,
              and spacing to make it readable. Here are the main approaches:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              1. Using Online Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The easiest way to format JSON is using an online JSON formatter
              like our{" "}
              <Link
                href="/tools/json-formatter"
                className="text-blue-500 hover:underline font-semibold"
              >
                free JSON formatter tool
              </Link>
              . Simply paste your JSON, click format, and get beautifully
              formatted output instantly.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              2. Using Command Line Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              If you have Node.js installed, you can use the built-in JSON
              parser:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`node -e "console.log(JSON.stringify(JSON.parse(require('fs').readFileSync('data.json', 'utf8')), null, 2))"`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              3. Using Programming Languages
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Most programming languages have built-in JSON formatting
              capabilities:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">JavaScript/Node.js:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`JSON.stringify(data, null, 2)`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Python:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`json.dumps(data, indent=2)`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="validating-json">
            <h2 className="text-3xl font-bold mb-4 mt-8">Validating JSON</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              JSON validation ensures your data structure is correct and can be
              parsed. Invalid JSON will cause errors in applications that try to
              process it.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Our{" "}
              <Link
                href="/tools/json-formatter"
                className="text-blue-500 hover:underline font-semibold"
              >
                JSON formatter tool
              </Link>{" "}
              automatically validates JSON as you format it, highlighting any
              syntax errors immediately.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Common validation checks include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Proper bracket and brace matching</li>
              <li>Valid string escaping</li>
              <li>Correct comma placement</li>
              <li>Valid number formats</li>
              <li>Proper boolean and null values</li>
            </ul>
          </section>

          <section id="best-practices">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              JSON Best Practices
            </h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  1. Use Consistent Indentation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Stick to either 2 or 4 spaces for indentation. Two spaces is
                  more common and saves space.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  2. Sort Keys Alphabetically
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When possible, sort object keys alphabetically for better
                  readability and easier comparison.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  3. Use Descriptive Key Names
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Choose clear, descriptive names for your keys that accurately
                  represent the data they contain.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  4. Validate Before Production
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always validate JSON before using it in production
                  applications. Use schema validation for complex structures.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  5. Handle Errors Gracefully
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Implement proper error handling when parsing JSON, especially
                  when dealing with user input or external APIs.
                </p>
              </div>
            </div>
          </section>

          <section id="common-errors">
            <h2 className="text-3xl font-bold mb-4 mt-8">Common JSON Errors</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Here are the most common JSON errors and how to fix them:
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
                  ❌ Trailing Commas
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Error:</strong> Trailing commas are not allowed in
                  JSON
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm mb-2">
                  <code>{`{"name": "John", "age": 30,}`}</code>
                </pre>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Fix:</strong> Remove the trailing comma
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm">
                  <code>{`{"name": "John", "age": 30}`}</code>
                </pre>
              </div>
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
                  ❌ Single Quotes
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Error:</strong> JSON requires double quotes for
                  strings
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm mb-2">
                  <code>{`{'name': 'John'}`}</code>
                </pre>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Fix:</strong> Use double quotes
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm">
                  <code>{`{"name": "John"}`}</code>
                </pre>
              </div>
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
                  ❌ Comments
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Error:</strong> Comments are not allowed in JSON
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded text-sm mb-2">
                  <code>{`{"name": "John" // comment}`}</code>
                </pre>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Fix:</strong> Remove comments or use a separate
                  documentation file
                </p>
              </div>
            </div>
          </section>

          <section id="tools-and-resources">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Tools and Resources
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Here are some excellent tools and resources for working with JSON:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/json-formatter"
                    className="text-blue-500 hover:underline"
                  >
                    JSON Formatter Tool
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Free online tool to format, validate, and beautify JSON data
                  instantly.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">JSON Schema Validator</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Validate JSON against schemas to ensure data structure
                  compliance.
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
              Ready to Format Your JSON?
            </h2>
            <p className="mb-6 text-blue-100">
              Try our free JSON formatter tool and see the difference proper
              formatting makes.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-500 hover:bg-gray-100"
            >
              <Link
                href="/tools/json-formatter"
                className="flex items-center gap-2"
              >
                Format JSON Now
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
              href="/blog/csv-json-conversion"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                CSV to JSON Conversion: Best Practices
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn how to convert CSV data to JSON format effectively.
              </p>
            </Link>
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
          </div>
        </section>
      </article>
    </>
  );
}
