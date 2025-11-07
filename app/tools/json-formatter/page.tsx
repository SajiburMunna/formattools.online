import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { JSONFormatterClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "json-formatter")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function JSONFormatterPage() {
  const jsonLd = generateJsonLd(tool);

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* SEO Content Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{tool.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {tool.longDescription}
          </p>

          {/* SEO Keywords */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Tool Component */}
        <JSONFormatterClient />

        {/* SEO Content Footer */}
        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About JSON Formatter</h2>
          <p>
            JSON (JavaScript Object Notation) is a lightweight data-interchange
            format that is easy for humans to read and write and easy for
            machines to parse and generate. Our free online JSON formatter helps
            you beautify, validate, and format JSON data with proper indentation
            and syntax highlighting.
          </p>

          <h3>How to Use the JSON Formatter</h3>
          <ol>
            <li>Paste your JSON data into the input editor on the left</li>
            <li>
              Click the "Beautify" button to format your JSON with proper
              indentation
            </li>
            <li>Use "Minify" to compress JSON by removing whitespace</li>
            <li>Copy the formatted output or download it as a file</li>
          </ol>

          <h3>Features</h3>
          <ul>
            <li>
              <strong>Beautify JSON:</strong> Add proper indentation and
              formatting for readability
            </li>
            <li>
              <strong>Minify JSON:</strong> Remove unnecessary whitespace to
              reduce file size
            </li>
            <li>
              <strong>JSON Validation:</strong> Automatically detects and
              reports syntax errors
            </li>
            <li>
              <strong>Syntax Highlighting:</strong> Monaco Editor provides
              professional code highlighting
            </li>
            <li>
              <strong>Instant Processing:</strong> All operations happen in your
              browser for maximum speed and privacy
            </li>
          </ul>

          <h3>Why Format JSON?</h3>
          <p>
            Formatting JSON is essential for developers working with APIs,
            configuration files, and data interchange. Well-formatted JSON is
            easier to read, debug, and maintain. Whether you're working with
            REST APIs, configuration files, or database exports, our JSON
            formatter makes your data readable and professional.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li>Format API responses for debugging</li>
            <li>Validate JSON configuration files</li>
            <li>Minify JSON for production deployment</li>
            <li>Pretty print JSON logs</li>
            <li>Convert between formatted and compact JSON</li>
          </ul>
        </div>
      </div>
    </>
  );
}
