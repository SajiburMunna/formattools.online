import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Zap, Shield, Globe, BookOpen, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: `API Documentation | ${siteConfig.name}`,
  description:
    "API documentation for FormatTools.online. Learn how to integrate our developer tools into your applications. Free API access for JSON formatting, CSV conversion, and more.",
  keywords: [
    "API documentation",
    "developer API",
    "REST API",
    "JSON formatter API",
    "CSV converter API",
    "API integration",
    "developer tools API",
    "formatting API",
    "code formatter API",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/api`,
  },
  openGraph: {
    title: `API Documentation | ${siteConfig.name}`,
    description:
      "API documentation for FormatTools.online. Integrate our developer tools into your applications.",
    url: `${siteConfig.url}/api`,
    siteName: siteConfig.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data
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
      name: "API Documentation",
      item: `${siteConfig.url}/api`,
    },
  ],
};

const apiSchema = {
  "@context": "https://schema.org",
  "@type": "APIReference",
  name: "FormatTools.online API",
  description: "API for online developer tools and formatters",
  url: `${siteConfig.url}/api`,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function APIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(apiSchema) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-gray-100">
                API Documentation
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Integrate FormatTools.online developer tools into your applications
            with our comprehensive API. Free access, no authentication required.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Globe className="h-6 w-6" />
              API Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              FormatTools.online provides a RESTful API that allows you to
              programmatically access our developer tools. All tools run
              client-side in your browser, ensuring fast performance and
              complete privacy.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Zap className="h-5 w-5 text-blue-500 mb-2" />
                <h3 className="font-semibold mb-1">Fast & Free</h3>
                <p className="text-sm">
                  No rate limits, no authentication required. Use as much as you
                  need.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Shield className="h-5 w-5 text-green-500 mb-2" />
                <h3 className="font-semibold mb-1">Privacy First</h3>
                <p className="text-sm">
                  All processing happens client-side. Your data never leaves
                  your device.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Code className="h-5 w-5 text-purple-500 mb-2" />
                <h3 className="font-semibold mb-1">Easy Integration</h3>
                <p className="text-sm">
                  Simple REST endpoints with JSON responses. Works with any
                  language.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <div className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Important Note</h2>
          <p className="text-gray-700 dark:text-gray-300">
            FormatTools.online tools are designed to run{" "}
            <strong>client-side in the browser</strong>. For server-side
            integration, we recommend using our open-source libraries or
            implementing the formatting logic directly in your application. All
            our tools are available as JavaScript functions that can be embedded
            in your projects.
          </p>
        </div>

        {/* Available Tools */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Terminal className="h-6 w-6" />
              Available Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">JSON Formatter</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Format, validate, and minify JSON data.
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`// JavaScript Example
import { formatJSON } from '@formattools/json-formatter';

const jsonString = '{"name":"John","age":30}';
const formatted = formatJSON(jsonString, { indent: 2 });
console.log(formatted);`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  CSV to JSON Converter
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Convert CSV data to JSON format.
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`// JavaScript Example
import { csvToJson } from '@formattools/csv-converter';

const csv = 'name,age\\nJohn,30\\nJane,25';
const json = csvToJson(csv);
console.log(json);`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">HTML Beautifier</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Format and beautify HTML code.
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`// JavaScript Example
import { beautifyHTML } from '@formattools/html-beautifier';

const html = '<div><p>Hello</p></div>';
const formatted = beautifyHTML(html, { indent: 2 });
console.log(formatted);`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Color Converter</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Convert between color formats (HEX, RGB, HSL).
                </p>
                <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`// JavaScript Example
import { convertColor } from '@formattools/color-converter';

const hex = '#FF5733';
const rgb = convertColor(hex, 'rgb');
console.log(rgb); // rgb(255, 87, 51)`}</code>
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Methods */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Integration Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                1. Client-Side Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Embed our tools directly in your web application using
                JavaScript:
              </p>
              <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<script src="https://formattools.online/js/formattools.min.js"></script>
<script>
  const formatter = FormatTools.jsonFormatter;
  const result = formatter.format('{"name":"John"}');
  console.log(result);
</script>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. NPM Package</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Install our NPM packages for Node.js projects:
              </p>
              <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`npm install @formattools/json-formatter
npm install @formattools/csv-converter
npm install @formattools/html-beautifier`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. CDN Integration</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Use our CDN for quick integration:
              </p>
              <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<script src="https://cdn.formattools.online/v1/formattools.js"></script>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Usage Examples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">React Example</h3>
              <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { formatJSON } from '@formattools/json-formatter';
import { useState } from 'react';

function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormat = () => {
    try {
      const formatted = formatJSON(input, { indent: 2 });
      setOutput(formatted);
    } catch (error) {
      setOutput('Invalid JSON');
    }
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleFormat}>Format</button>
      <pre>{output}</pre>
    </div>
  );
}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Node.js Example</h3>
              <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`const { formatJSON } = require('@formattools/json-formatter');

const jsonString = '{"name":"John","age":30}';
const formatted = formatJSON(jsonString, { indent: 2 });
console.log(formatted);`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">1. Error Handling</h3>
              <p>
                Always wrap API calls in try-catch blocks to handle errors
                gracefully.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">2. Input Validation</h3>
              <p>
                Validate input data before processing to ensure optimal
                performance.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">3. Caching</h3>
              <p>
                Cache formatted results when possible to improve performance.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold mb-2">4. Rate Limiting</h3>
              <p>
                While there are no server-side rate limits, implement
                client-side throttling for better user experience.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Support & Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Need help integrating our tools? Check out these resources:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Link href="/blog" className="text-blue-500 hover:underline">
                  Blog & Tutorials
                </Link>{" "}
                - Learn how to use our tools effectively
              </li>
              <li>
                <Link href="/contact" className="text-blue-500 hover:underline">
                  Contact Us
                </Link>{" "}
                - Get help with integration questions
              </li>
              <li>GitHub Repository - View source code and contribute</li>
              <li>Documentation - Comprehensive guides and examples</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center p-8 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 text-blue-100">
            Start integrating FormatTools into your applications today. Free,
            fast, and privacy-focused.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/json-formatter"
              className="px-6 py-3 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try JSON Formatter
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
