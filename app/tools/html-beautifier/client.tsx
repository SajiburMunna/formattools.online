"use client";

import { EditorLayout } from "@/components/tools/editor-layout";
import { formatHTML, minifyHTML } from "@/features/formatters/html-beautifier";

const defaultHTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sample Page</title></head><body><header><h1>Welcome</h1></header><main><p>This is a sample HTML document.</p></main><footer><p>&copy; 2025 FormatTools</p></footer></body></html>`;

export function HTMLBeautifierClient() {
  return (
    <EditorLayout
      title="HTML Beautifier"
      inputLabel="Input HTML"
      outputLabel="Formatted HTML"
      inputPlaceholder="<html>...</html>"
      onFormat={formatHTML}
      onMinify={minifyHTML}
      language="html"
      defaultInput={defaultHTML}
    />
  );
}
