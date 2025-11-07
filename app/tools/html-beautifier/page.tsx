import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { HTMLBeautifierClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "html-beautifier")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function HTMLBeautifierPage() {
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
        <HTMLBeautifierClient />

        {/* SEO Content Footer */}
        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About HTML Beautifier</h2>
          <p>
            Our free online HTML beautifier formats and prettifies messy HTML
            code with proper indentation and structure. Perfect for web
            developers who need to clean up minified HTML, format template code,
            or make HTML more readable. All processing happens in your browser
            for instant results and complete privacy.
          </p>

          <h3>How to Use the HTML Beautifier</h3>
          <ol>
            <li>Paste your HTML code into the input editor</li>
            <li>Click "Beautify" to format with proper indentation</li>
            <li>
              Use "Minify" to compress HTML by removing unnecessary whitespace
            </li>
            <li>Copy the formatted code or download it as a file</li>
          </ol>

          <h3>Features</h3>
          <ul>
            <li>
              <strong>Beautify HTML:</strong> Add proper indentation and line
              breaks for readability
            </li>
            <li>
              <strong>Minify HTML:</strong> Remove whitespace to reduce file
              size
            </li>
            <li>
              <strong>Syntax Highlighting:</strong> Professional code editor
              with HTML syntax support
            </li>
            <li>
              <strong>Instant Processing:</strong> Real-time formatting in your
              browser
            </li>
            <li>
              <strong>100% Private:</strong> Your code never leaves your device
            </li>
          </ul>

          <h3>Why Format HTML?</h3>
          <p>Well-formatted HTML is crucial for:</p>
          <ul>
            <li>
              <strong>Readability:</strong> Makes code easier to understand and
              maintain
            </li>
            <li>
              <strong>Debugging:</strong> Properly indented HTML helps identify
              structure issues
            </li>
            <li>
              <strong>Collaboration:</strong> Clean code is easier for team
              members to work with
            </li>
            <li>
              <strong>Learning:</strong> Formatted HTML helps beginners
              understand document structure
            </li>
            <li>
              <strong>SEO:</strong> Clean, semantic HTML improves search engine
              optimization
            </li>
          </ul>

          <h3>Common Use Cases</h3>
          <ul>
            <li>Format minified HTML from production builds</li>
            <li>Clean up HTML from WYSIWYG editors</li>
            <li>Beautify HTML templates and components</li>
            <li>Format HTML email templates</li>
            <li>Prepare HTML for code review or documentation</li>
            <li>Minify HTML for faster page load times</li>
          </ul>

          <h3>Best Practices</h3>
          <p>When working with HTML, keep these tips in mind:</p>
          <ul>
            <li>
              Use semantic HTML5 elements (header, nav, main, footer, etc.)
            </li>
            <li>Keep consistent indentation (2 or 4 spaces)</li>
            <li>Use lowercase for element and attribute names</li>
            <li>Always close tags properly</li>
            <li>Add comments for complex sections</li>
            <li>Validate your HTML with W3C validator</li>
          </ul>
        </div>
      </div>
    </>
  );
}
