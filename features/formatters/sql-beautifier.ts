export function formatSQL(sql: string): string {
  try {
    let formatted = sql.trim();

    // SQL keywords to format
    const keywords = [
      "SELECT",
      "FROM",
      "WHERE",
      "JOIN",
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN",
      "ON",
      "AND",
      "OR",
      "ORDER BY",
      "GROUP BY",
      "HAVING",
      "LIMIT",
      "OFFSET",
      "INSERT INTO",
      "VALUES",
      "UPDATE",
      "SET",
      "DELETE",
      "CREATE TABLE",
      "ALTER TABLE",
      "DROP TABLE",
      "AS",
      "UNION",
      "UNION ALL",
      "CASE",
      "WHEN",
      "THEN",
      "ELSE",
      "END",
    ];

    // Convert to uppercase and add newlines
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      formatted = formatted.replace(regex, keyword.toUpperCase());
    });

    // Add newlines before major keywords
    const majorKeywords = [
      "SELECT",
      "FROM",
      "WHERE",
      "JOIN",
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "ORDER BY",
      "GROUP BY",
      "HAVING",
      "LIMIT",
      "INSERT INTO",
      "UPDATE",
      "DELETE",
      "UNION",
    ];

    majorKeywords.forEach((keyword) => {
      const regex = new RegExp(`\\s+(${keyword})\\s+`, "gi");
      formatted = formatted.replace(regex, `\n${keyword} `);
    });

    // Format commas in SELECT
    formatted = formatted.replace(/,\s*(?=[a-zA-Z])/g, ",\n  ");

    // Indent subqueries
    let indentLevel = 0;
    const lines = formatted.split("\n");
    const indentedLines = lines.map((line) => {
      const trimmed = line.trim();

      // Decrease indent for closing parenthesis
      if (trimmed.startsWith(")")) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      const indented = "  ".repeat(indentLevel) + trimmed;

      // Increase indent for opening parenthesis
      if (trimmed.endsWith("(") || /\($/.test(trimmed)) {
        indentLevel++;
      }

      return indented;
    });

    formatted = indentedLines.join("\n");

    // Clean up extra whitespace
    formatted = formatted.replace(/\n\s*\n\s*\n/g, "\n\n");
    formatted = formatted.trim();

    return formatted;
  } catch (error) {
    throw new Error(
      `SQL formatting failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export function minifySQL(sql: string): string {
  try {
    let minified = sql.trim();

    // Remove comments
    minified = minified.replace(/--.*$/gm, "");
    minified = minified.replace(/\/\*[\s\S]*?\*\//g, "");

    // Remove extra whitespace
    minified = minified.replace(/\s+/g, " ");

    // Remove spaces around operators
    minified = minified.replace(/\s*([,;=()])\s*/g, "$1");

    return minified.trim();
  } catch (error) {
    throw new Error(
      `SQL minification failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
