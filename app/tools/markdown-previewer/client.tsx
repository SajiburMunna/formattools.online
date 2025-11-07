"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, Download, FileCode, Eye } from "lucide-react";
import { convertMarkdownToHTML } from "@/features/formatters/markdown-previewer";

const defaultMarkdown = `# Welcome to Markdown Previewer

## Features

Write **Markdown** and see the *HTML preview* instantly!

### What you can do:

- Create headers
- Format text with **bold** and *italic*
- Add [links](https://formattools.online)
- Insert \`inline code\`
- Create lists
- Add images

### Code Blocks

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Blockquotes

> This is a blockquote.
> It can span multiple lines.

### Tables

| Feature | Support |
|---------|---------|
| Headers | ✅ |
| Lists | ✅ |
| Links | ✅ |
| Code | ✅ |

---

Happy writing! 🚀`;

export function MarkdownPreviewerClient() {
  const [input, setInput] = useState(defaultMarkdown);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");

  // Convert markdown to HTML
  let htmlCode = "";
  try {
    htmlCode = convertMarkdownToHTML(input);
  } catch (error) {
    htmlCode = `<p style="color: red;">Error: ${
      error instanceof Error ? error.message : "Invalid Markdown"
    }</p>`;
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="min-w-0 overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Markdown Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your Markdown here..."
              className="font-mono text-sm min-h-[500px] resize-none"
            />
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setInput("")}>
                Clear
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInput(defaultMarkdown)}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview/Output Section */}
        <Card className="min-w-0 max-w-full overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <CardTitle className="text-lg">
                {viewMode === "preview" ? "HTML Preview" : "HTML Code"}
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "preview" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("preview")}
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </Button>
                <Button
                  variant={viewMode === "code" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("code")}
                >
                  <FileCode className="h-4 w-4 mr-1" />
                  Code
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 min-w-0">
            {viewMode === "preview" ? (
              <div
                className="markdown-preview min-h-[500px] max-h-[600px] p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 overflow-auto"
                style={{
                  lineHeight: "1.6",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  width: "100%",
                  maxWidth: "100%",
                }}
                dangerouslySetInnerHTML={{ __html: htmlCode }}
              />
            ) : (
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg min-h-[500px] max-h-[600px] overflow-auto">
                <pre className="text-xs font-mono whitespace-pre-wrap leading-relaxed wrap-break-word">
                  {htmlCode}
                </pre>
              </div>
            )}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy HTML
                  </>
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-1" />
                Download HTML
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Markdown Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                Headers
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs block text-gray-700 dark:text-gray-300 whitespace-pre">
                  {`# H1
## H2
### H3`}
                </code>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                Emphasis
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs block text-gray-700 dark:text-gray-300 whitespace-pre">
                  {`**bold**
*italic*
~~strikethrough~~`}
                </code>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                Lists
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs block text-gray-700 dark:text-gray-300 whitespace-pre">
                  {`- Item 1
- Item 2
1. Numbered`}
                </code>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                Links
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs block text-gray-700 dark:text-gray-300 whitespace-pre">
                  {`[text](url)
[link][ref]
[ref]: url`}
                </code>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                Code
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs block text-gray-700 dark:text-gray-300 whitespace-pre">
                  {`\`inline code\`
\`\`\`
code block
\`\`\``}
                </code>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                Quotes
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs block text-gray-700 dark:text-gray-300 whitespace-pre">
                  {`> blockquote
>> nested`}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        .markdown-preview {
          max-width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
          box-sizing: border-box;
        }
        .markdown-preview * {
          max-width: 100%;
          box-sizing: border-box;
        }
        .markdown-preview h1 {
          font-size: 2em;
          font-weight: bold;
          margin-top: 0;
          margin-bottom: 0.5em;
          color: inherit;
          word-wrap: break-word;
        }
        .markdown-preview h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin-top: 1em;
          margin-bottom: 0.5em;
          color: inherit;
          word-wrap: break-word;
        }
        .markdown-preview h3 {
          font-size: 1.25em;
          font-weight: bold;
          margin-top: 1em;
          margin-bottom: 0.5em;
          color: inherit;
          word-wrap: break-word;
        }
        .markdown-preview p {
          margin-bottom: 1em;
          color: inherit;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .markdown-preview ul,
        .markdown-preview ol {
          margin-left: 1.5em;
          margin-bottom: 1em;
        }
        .markdown-preview li {
          margin-bottom: 0.25em;
          word-wrap: break-word;
        }
        .markdown-preview code {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-family: monospace;
          font-size: 0.9em;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .dark .markdown-preview code {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .markdown-preview pre {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 1em;
          border-radius: 5px;
          overflow-x: auto;
          margin-bottom: 1em;
          max-width: 100%;
        }
        .dark .markdown-preview pre {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .markdown-preview pre code {
          background-color: transparent;
          padding: 0;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .markdown-preview blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1em;
          margin-left: 0;
          margin-bottom: 1em;
          color: #6b7280;
          word-wrap: break-word;
        }
        .dark .markdown-preview blockquote {
          color: #9ca3af;
        }
        .markdown-preview a {
          color: #3b82f6;
          text-decoration: underline;
          word-break: break-all;
        }
        .markdown-preview strong {
          font-weight: bold;
        }
        .markdown-preview em {
          font-style: italic;
        }
        .markdown-preview hr {
          border: none;
          border-top: 2px solid #e5e7eb;
          margin: 2em 0;
        }
        .dark .markdown-preview hr {
          border-top-color: #374151;
        }
        .markdown-preview table {
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 1em;
          display: block;
          overflow-x: auto;
        }
        .markdown-preview table th,
        .markdown-preview table td {
          border: 1px solid #e5e7eb;
          padding: 0.5em;
          text-align: left;
          word-wrap: break-word;
        }
        .dark .markdown-preview table th,
        .dark .markdown-preview table td {
          border-color: #374151;
        }
        .markdown-preview table th {
          background-color: rgba(0, 0, 0, 0.03);
          font-weight: bold;
        }
        .dark .markdown-preview table th {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .markdown-preview img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
