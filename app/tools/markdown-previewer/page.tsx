import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { MarkdownPreviewerClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "markdown-previewer")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function MarkdownPreviewerPage() {
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

        <MarkdownPreviewerClient />

        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About Markdown Previewer</h2>
          <p>
            Write Markdown and see the HTML output in real-time. Perfect for
            creating README files, documentation, blog posts, and any
            Markdown-formatted content.
          </p>

          <h3>Supported Markdown Features</h3>
          <ul>
            <li>
              <strong>Headers:</strong> # H1, ## H2, ### H3
            </li>
            <li>
              <strong>Emphasis:</strong> *italic*, **bold**
            </li>
            <li>
              <strong>Lists:</strong> Ordered and unordered
            </li>
            <li>
              <strong>Links:</strong> [text](url)
            </li>
            <li>
              <strong>Images:</strong> ![alt](url)
            </li>
            <li>
              <strong>Code:</strong> `inline` and ```blocks```
            </li>
            <li>
              <strong>Blockquotes:</strong> &gt; quote
            </li>
            <li>
              <strong>Horizontal Rules:</strong> ---
            </li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li>Write and preview README.md files</li>
            <li>Create documentation</li>
            <li>Draft blog posts in Markdown</li>
            <li>Format GitHub comments and issues</li>
            <li>Learn Markdown syntax</li>
          </ul>
        </div>
      </div>
    </>
  );
}
