"use client";

import { EditorLayout } from "@/components/tools/editor-layout";
import { cleanSVG, minifySVG } from "@/features/formatters/svg-cleaner";

const defaultSVG = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generator: Sketch 63.1 -->
<svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none">
    <circle id="circle" cx="50" cy="50" r="40" fill="#3b82f6"/>
  </g>
</svg>`;

export function SVGCleanerClient() {
  return (
    <EditorLayout
      title="SVG Cleaner"
      inputLabel="Input SVG"
      outputLabel="Cleaned SVG"
      inputPlaceholder="Paste your SVG code..."
      onFormat={cleanSVG}
      onMinify={minifySVG}
      language="xml"
      defaultInput={defaultSVG}
    />
  );
}
