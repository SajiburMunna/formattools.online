export function convertMarkdownToHTML(markdown: string): string {
  try {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
    html = html.replace(/\_\_(.*?)\_\_/gim, "<strong>$1</strong>");

    // Italic
    html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");
    html = html.replace(/\_(.*?)\_/gim, "<em>$1</em>");

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>");

    // Inline code
    html = html.replace(/`(.*?)`/gim, "<code>$1</code>");

    // Links
    html = html.replace(
      /\[(.*?)\]\((.*?)\)/gim,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />');

    // Unordered lists
    html = html.replace(/^\* (.*$)/gim, "<li>$1</li>");
    html = html.replace(/^\- (.*$)/gim, "<li>$1</li>");

    // Ordered lists
    html = html.replace(/^\d+\. (.*$)/gim, "<li>$1</li>");

    // Wrap lists
    html = html.replace(/(<li>.*<\/li>)/gims, (match) => `<ul>${match}</ul>`);

    // Blockquotes
    html = html.replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>");

    // Horizontal rules
    html = html.replace(/^\-\-\-$/gim, "<hr />");
    html = html.replace(/^\*\*\*$/gim, "<hr />");

    // Line breaks
    html = html.replace(/\n\n/g, "</p><p>");
    html = html.replace(/\n/g, "<br />");

    // Wrap in paragraphs
    html = `<p>${html}</p>`;

    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, "");

    // Add basic styling
    const styledHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background: #fff;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }
    h1 { font-size: 2em; border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
    h2 { font-size: 1.5em; border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
    h3 { font-size: 1.25em; }
    code {
      background: #f6f8fa;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    pre {
      background: #f6f8fa;
      padding: 16px;
      border-radius: 6px;
      overflow-x: auto;
    }
    pre code {
      background: none;
      padding: 0;
    }
    blockquote {
      border-left: 4px solid #ddd;
      padding-left: 16px;
      color: #666;
      margin: 16px 0;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    ul, ol {
      padding-left: 2em;
    }
    li {
      margin: 4px 0;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    hr {
      border: none;
      border-top: 2px solid #eee;
      margin: 24px 0;
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;

    return styledHtml.trim();
  } catch (error) {
    throw new Error(
      `Markdown conversion failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
