import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { SVGCleanerClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "svg-cleaner")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function SVGCleanerPage() {
  const jsonLd = generateJsonLd(tool);

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{tool.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {tool.longDescription}
          </p>

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

        <SVGCleanerClient />

        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About SVG Cleaner</h2>
          <p>
            Optimize and clean SVG files by removing unnecessary metadata,
            comments, and editor-specific attributes. Reduce file size while
            maintaining visual quality.
          </p>

          <h3>What Gets Removed</h3>
          <ul>
            <li>XML declarations and DOCTYPE</li>
            <li>Comments and metadata tags</li>
            <li>Editor-specific attributes (Sketch, Figma, etc.)</li>
            <li>Empty groups and unnecessary IDs</li>
            <li>Excessive whitespace</li>
          </ul>

          <h3>Features</h3>
          <ul>
            <li>
              <strong>Clean:</strong> Remove unnecessary code with formatting
            </li>
            <li>
              <strong>Minify:</strong> Compress SVG to smallest size
            </li>
            <li>
              <strong>Safe:</strong> Preserves visual appearance
            </li>
            <li>
              <strong>Fast:</strong> Instant processing in browser
            </li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li>Optimize SVG icons for websites</li>
            <li>Clean up exported SVGs from design tools</li>
            <li>Reduce file size for faster page loads</li>
            <li>Prepare SVGs for inline embedding</li>
          </ul>
        </div>
      </div>
    </>
  );
}
