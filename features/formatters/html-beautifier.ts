export function formatHTML(html: string): string {
  try {
    let formatted = "";
    let indent = 0;
    const tab = "  ";

    // Split by tags
    const tokens = html.split(/(<[^>]+>)/g).filter((token) => token.trim());

    tokens.forEach((token) => {
      if (token.startsWith("</")) {
        // Closing tag
        indent = Math.max(0, indent - 1);
        formatted += tab.repeat(indent) + token + "\n";
      } else if (token.startsWith("<")) {
        // Opening or self-closing tag
        formatted += tab.repeat(indent) + token + "\n";

        // Check if it's a self-closing tag or void element
        const isSelfClosing =
          token.endsWith("/>") ||
          /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/.test(
            token
          );

        if (!isSelfClosing) {
          indent++;
        }
      } else {
        // Text content
        const trimmed = token.trim();
        if (trimmed) {
          formatted += tab.repeat(indent) + trimmed + "\n";
        }
      }
    });

    return formatted.trim();
  } catch (error) {
    throw new Error(
      `HTML formatting failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export function minifyHTML(html: string): string {
  try {
    return html.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
  } catch (error) {
    throw new Error(
      `HTML minification failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
