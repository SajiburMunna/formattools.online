"use client";

import { EditorLayout } from "@/components/tools/editor-layout";
import { csvToJSON } from "@/features/formatters/csv-converter";

const defaultCSV = `name,email,age,city
John Doe,john@example.com,30,New York
Jane Smith,jane@example.com,25,San Francisco
Bob Johnson,bob@example.com,35,Chicago`;

export function CSVConverterClient() {
  return (
    <EditorLayout
      title="CSV to JSON Converter"
      inputLabel="Input CSV"
      outputLabel="JSON Output"
      inputPlaceholder="Paste your CSV data here..."
      onFormat={csvToJSON}
      language="plaintext"
      defaultInput={defaultCSV}
    />
  );
}
