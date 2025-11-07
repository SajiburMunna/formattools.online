export function csvToJSON(csv: string): string {
  try {
    const lines = csv.trim().split("\n");
    if (lines.length === 0) {
      throw new Error("CSV is empty");
    }

    // Parse header
    const headers = lines[0].split(",").map((h) => h.trim());

    // Parse rows
    const result = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.trim());
      const obj: Record<string, string> = {};

      headers.forEach((header, index) => {
        obj[header] = values[index] || "";
      });

      result.push(obj);
    }

    return JSON.stringify(result, null, 2);
  } catch (error) {
    throw new Error(
      `CSV conversion failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export function jsonToCSV(json: string): string {
  try {
    const data = JSON.parse(json);

    if (!Array.isArray(data)) {
      throw new Error("JSON must be an array of objects");
    }

    if (data.length === 0) {
      return "";
    }

    // Get all unique keys from all objects
    const headers = Array.from(
      new Set(data.flatMap((obj) => Object.keys(obj)))
    );

    // Create CSV header
    const csvLines = [headers.join(",")];

    // Create CSV rows
    for (const obj of data) {
      const row = headers.map((header) => {
        const value = obj[header] !== undefined ? String(obj[header]) : "";
        // Escape commas and quotes
        return value.includes(",") || value.includes('"')
          ? `"${value.replace(/"/g, '""')}"`
          : value;
      });
      csvLines.push(row.join(","));
    }

    return csvLines.join("\n");
  } catch (error) {
    throw new Error(
      `JSON to CSV conversion failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
