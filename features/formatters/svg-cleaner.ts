export function cleanSVG(svg: string): string {
  try {
    let cleaned = svg.trim();

    // Remove XML declaration
    cleaned = cleaned.replace(/<\?xml[^?]*\?>/g, "");

    // Remove comments
    cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, "");

    // Remove DOCTYPE
    cleaned = cleaned.replace(/<!DOCTYPE[^>]*>/g, "");

    // Remove metadata tags
    cleaned = cleaned.replace(/<metadata[\s\S]*?<\/metadata>/gi, "");

    // Remove editor-specific attributes
    const editorAttrs = [
      "xmlns:sketch",
      "xmlns:xlink",
      "sketch:type",
      "id",
      "data-name",
    ];
    editorAttrs.forEach((attr) => {
      const regex = new RegExp(`\\s*${attr}="[^"]*"`, "g");
      cleaned = cleaned.replace(regex, "");
    });

    // Remove empty groups
    cleaned = cleaned.replace(/<g[\s]*><\/g>/g, "");

    // Remove unnecessary whitespace
    cleaned = cleaned.replace(/\s+/g, " ");
    cleaned = cleaned.replace(/>\s+</g, "><");

    // Format with basic indentation
    let formatted = "";
    let indent = 0;
    const tab = "  ";

    const tokens = cleaned.split(/(<[^>]+>)/g).filter((token) => token.trim());

    tokens.forEach((token) => {
      if (token.startsWith("</")) {
        indent = Math.max(0, indent - 1);
        formatted += tab.repeat(indent) + token + "\n";
      } else if (token.startsWith("<")) {
        formatted += tab.repeat(indent) + token + "\n";
        if (!token.endsWith("/>") && !token.startsWith("<?")) {
          indent++;
        }
      } else {
        const trimmed = token.trim();
        if (trimmed) {
          formatted += tab.repeat(indent) + trimmed + "\n";
        }
      }
    });

    return formatted.trim();
  } catch (error) {
    throw new Error(
      `SVG cleaning failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export function minifySVG(svg: string): string {
  try {
    let minified = svg.trim();

    // Remove XML declaration
    minified = minified.replace(/<\?xml[^?]*\?>/g, "");

    // Remove comments
    minified = minified.replace(/<!--[\s\S]*?-->/g, "");

    // Remove metadata
    minified = minified.replace(/<metadata[\s\S]*?<\/metadata>/gi, "");

    // Remove all whitespace between tags
    minified = minified.replace(/>\s+</g, "><");

    // Remove extra whitespace
    minified = minified.replace(/\s+/g, " ");

    return minified.trim();
  } catch (error) {
    throw new Error(
      `SVG minification failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
