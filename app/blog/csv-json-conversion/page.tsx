import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const postData = {
  title: "CSV to JSON Conversion: Best Practices and Common Pitfalls",
  slug: "csv-json-conversion",
  excerpt:
    "Learn how to convert CSV data to JSON format effectively, handle edge cases, and avoid common mistakes.",
  date: "2025-01-01",
  readTime: "4 min read",
  category: "Data",
  author: {
    name: "FormatTools Team",
    url: siteConfig.url,
  },
  lastModified: "2025-01-01",
};

export const metadata: Metadata = {
  title: `${postData.title} | ${siteConfig.name}`,
  description: postData.excerpt,
  keywords: [
    "CSV to JSON",
    "CSV converter",
    "JSON converter",
    "data conversion",
    "CSV parser",
    "JSON parser",
    "CSV to JSON tool",
    "data transformation",
    "CSV format",
    "JSON format",
    "spreadsheet to JSON",
    "Excel to JSON",
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
    tags: ["CSV", "JSON", "Data Conversion", "Web Development", "Programming"],
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
    "CSV to JSON",
    "data conversion",
    "CSV parser",
    "JSON converter",
    "data transformation",
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
              <a href="#understanding-csv-json" className="hover:text-blue-500">
                Understanding CSV and JSON
              </a>
            </li>
            <li>
              <a href="#conversion-methods" className="hover:text-blue-500">
                Conversion Methods
              </a>
            </li>
            <li>
              <a href="#data-structure-options" className="hover:text-blue-500">
                Data Structure Options
              </a>
            </li>
            <li>
              <a href="#handling-edge-cases" className="hover:text-blue-500">
                Handling Edge Cases
              </a>
            </li>
            <li>
              <a href="#common-pitfalls" className="hover:text-blue-500">
                Common Pitfalls
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
          <section id="understanding-csv-json">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Understanding CSV and JSON
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              CSV (Comma-Separated Values) and JSON (JavaScript Object Notation)
              are two popular data formats, each with distinct characteristics:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">CSV Format</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Tabular data structure</li>
                  <li>Simple text format</li>
                  <li>Easy to edit in spreadsheets</li>
                  <li>No nested data support</li>
                  <li>Limited data types</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">JSON Format</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Hierarchical data structure</li>
                  <li>Supports nested objects/arrays</li>
                  <li>Type-aware (strings, numbers, booleans)</li>
                  <li>Standard for APIs</li>
                  <li>More flexible structure</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Converting CSV to JSON is often necessary when:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Working with APIs that require JSON format</li>
              <li>Processing data in web applications</li>
              <li>Storing structured data in databases</li>
              <li>Integrating spreadsheet data with web services</li>
            </ul>
          </section>

          <section id="conversion-methods">
            <h2 className="text-3xl font-bold mb-4 mt-8">Conversion Methods</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              There are several ways to convert CSV to JSON, each with its own
              advantages:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              1. Using Online Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The quickest method is using an online converter like our{" "}
              <Link
                href="/tools/csv-to-json"
                className="text-blue-500 hover:underline font-semibold"
              >
                CSV to JSON converter
              </Link>
              . Simply upload or paste your CSV data, choose your output format,
              and get instant JSON conversion.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              2. Using JavaScript/Node.js
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              For programmatic conversion in Node.js:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`const fs = require('fs');
const csv = require('csv-parser');

const results = [];
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync('data.json', JSON.stringify(results, null, 2));
  });`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              3. Using Python
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Python&apos;s pandas library makes CSV to JSON conversion simple:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`import pandas as pd
import json

# Read CSV
df = pd.read_csv('data.csv')

# Convert to JSON
df.to_json('data.json', orient='records', indent=2)`}</code>
            </pre>
          </section>

          <section id="data-structure-options">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Data Structure Options
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              CSV data can be converted to JSON in different structures
              depending on your needs:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Array of Objects (Most Common)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Each CSV row becomes an object in an array:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">CSV Input:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`name,age,city
John,30,New York
Jane,25,Los Angeles`}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">JSON Output:</h4>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`[
  {
    "name": "John",
    "age": "30",
    "city": "New York"
  },
  {
    "name": "Jane",
    "age": "25",
    "city": "Los Angeles"
  }
]`}</code>
                </pre>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              Object with Column Arrays
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Data organized by columns:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`{
  "name": ["John", "Jane"],
  "age": ["30", "25"],
  "city": ["New York", "Los Angeles"]
}`}</code>
            </pre>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Tip:</strong> Array of objects is the most common format
                and works best for most APIs and databases.
              </p>
            </div>
          </section>

          <section id="handling-edge-cases">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Handling Edge Cases
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              CSV files can contain various edge cases that need special
              handling:
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              1. Commas in Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              When CSV values contain commas, they should be enclosed in quotes:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`name,description
Product A,"A great product, with many features"
Product B,Simple product`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              2. Quotes in Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Quotes within quoted values are escaped by doubling them:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`name,quote
Person A,"He said ""Hello"" to me"`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              3. Empty Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Empty CSV cells can be represented as empty strings or null in
              JSON:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`// Empty string
{"name": "John", "email": ""}

// Or null
{"name": "John", "email": null}`}</code>
            </pre>
            <h3 className="text-2xl font-semibold mb-3 mt-6">
              4. Data Type Conversion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              CSV values are always strings. You may need to convert them to
              appropriate types:
            </p>
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
              <code>{`// Before conversion
{"age": "30", "active": "true"}

// After type conversion
{"age": 30, "active": true}`}</code>
            </pre>
          </section>

          <section id="common-pitfalls">
            <h2 className="text-3xl font-bold mb-4 mt-8">Common Pitfalls</h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
                  ❌ Not Handling Special Characters
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Special characters in CSV (commas, quotes, newlines) can break
                  parsing if not properly escaped. Always use a proper CSV
                  parser library.
                </p>
              </div>
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
                  ❌ Ignoring Encoding Issues
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  CSV files may use different encodings (UTF-8, Windows-1252,
                  etc.). Always specify the correct encoding when reading CSV
                  files.
                </p>
              </div>
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
                  ❌ Not Validating Data Types
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  All CSV values are strings. Don&apos;t assume numbers or
                  booleans without explicit conversion and validation.
                </p>
              </div>
              <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded">
                <h3 className="font-semibold mb-2 text-red-700 dark:text-red-400">
                  ❌ Missing Headers
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  CSV files without headers require special handling. Always
                  check if headers exist before conversion.
                </p>
              </div>
            </div>
          </section>

          <section id="best-practices">
            <h2 className="text-3xl font-bold mb-4 mt-8">Best Practices</h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  1. Use Proper CSV Parsers
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Don&apos;t try to parse CSV manually. Use established
                  libraries like csv-parser (Node.js), pandas (Python), or
                  PapaParse (JavaScript) that handle edge cases correctly.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">2. Validate Input Data</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always validate CSV data before conversion. Check for required
                  columns, data types, and constraints.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  3. Handle Large Files Efficiently
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For large CSV files, use streaming parsers instead of loading
                  everything into memory. Process data in chunks.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">4. Preserve Data Types</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Convert string values to appropriate JSON types (numbers,
                  booleans, null) based on your data schema.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">5. Error Handling</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Implement robust error handling for malformed CSV files,
                  missing data, and conversion failures.
                </p>
              </div>
            </div>
          </section>

          <section id="tools-and-resources">
            <h2 className="text-3xl font-bold mb-4 mt-8">
              Tools and Resources
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Here are some excellent tools for CSV to JSON conversion:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/csv-to-json"
                    className="text-blue-500 hover:underline"
                  >
                    CSV to JSON Converter
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Free online tool to convert CSV files to JSON format
                  instantly. Supports custom delimiters and data structure
                  options.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">
                  <Link
                    href="/tools/json-formatter"
                    className="text-blue-500 hover:underline"
                  >
                    JSON Formatter
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Format and validate your converted JSON data to ensure
                  it&apos;s properly structured and readable.
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
              Convert CSV to JSON Instantly
            </h2>
            <p className="mb-6 text-blue-100">
              Use our free CSV to JSON converter to transform your data quickly
              and accurately.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-500 hover:bg-gray-100"
            >
              <Link
                href="/tools/csv-to-json"
                className="flex items-center gap-2"
              >
                Try CSV to JSON Converter
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
