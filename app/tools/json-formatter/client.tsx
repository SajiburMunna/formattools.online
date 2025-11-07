"use client";

import { EditorLayout } from "@/components/tools/editor-layout";
import { formatJSON, minifyJSON } from "@/features/formatters/json-formatter";

const defaultJSON = `{
  "name": "FormatTools",
  "version": "1.0.0",
  "description": "Free online formatters for developers"
}`;

export function JSONFormatterClient() {
  return (
    <EditorLayout
      title="JSON Formatter"
      inputLabel="Input JSON"
      outputLabel="Formatted JSON"
      inputPlaceholder='{"key": "value"}'
      onFormat={formatJSON}
      onMinify={minifyJSON}
      language="json"
      defaultInput={defaultJSON}
    />
  );
}
