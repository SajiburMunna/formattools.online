import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { CSVConverterClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "csv-to-json")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function CSVToJSONPage() {
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
        <CSVConverterClient />

        {/* SEO Content Footer */}
        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About CSV to JSON Converter</h2>
          <p>
            Convert CSV (Comma Separated Values) files to JSON format instantly
            with our free online converter. Perfect for developers, data
            analysts, and anyone working with structured data. Our tool handles
            CSV parsing and JSON generation entirely in your browser for maximum
            speed and privacy.
          </p>

          <h3>How to Convert CSV to JSON</h3>
          <ol>
            <li>
              Paste your CSV data into the input field (first row should be
              headers)
            </li>
            <li>Click "Beautify" to convert CSV to formatted JSON</li>
            <li>
              The tool automatically parses headers and converts rows to JSON
              objects
            </li>
            <li>Copy the JSON output or download it as a file</li>
          </ol>

          <h3>Features</h3>
          <ul>
            <li>
              <strong>CSV to JSON:</strong> Convert CSV data to JSON array of
              objects
            </li>
            <li>
              <strong>Automatic Header Detection:</strong> First row is treated
              as field names
            </li>
            <li>
              <strong>Instant Conversion:</strong> Real-time processing in your
              browser
            </li>
            <li>
              <strong>Download Output:</strong> Save converted JSON as a file
            </li>
            <li>
              <strong>Privacy First:</strong> All data stays in your browser
            </li>
          </ul>

          <h3>CSV Format Requirements</h3>
          <p>
            For best results, ensure your CSV file follows these guidelines:
          </p>
          <ul>
            <li>First row contains column headers</li>
            <li>Each row has the same number of columns</li>
            <li>Values are separated by commas</li>
            <li>Text containing commas should be enclosed in quotes</li>
          </ul>

          <h3>Common Use Cases</h3>
          <ul>
            <li>Convert Excel/spreadsheet exports to JSON</li>
            <li>Prepare data for API consumption</li>
            <li>Import CSV data into web applications</li>
            <li>Convert database exports to JSON format</li>
            <li>Transform data for JavaScript/Node.js projects</li>
          </ul>

          <h3>Example</h3>
          <p>Input CSV:</p>
          <pre>name,age,city John,30,New York Jane,25,San Francisco</pre>
          <p>Output JSON:</p>
          <pre>
            {`[
  {
    "name": "John",
    "age": "30",
    "city": "New York"
  },
  {
    "name": "Jane",
    "age": "25",
    "city": "San Francisco"
  }
]`}
          </pre>
        </div>
      </div>
    </>
  );
}
