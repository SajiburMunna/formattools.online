import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { ColorConverterClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "color-converter")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function ColorConverterPage() {
  const jsonLd = generateJsonLd(tool);

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{tool.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {tool.longDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tool.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <ColorConverterClient />

        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About Color Converter</h2>
          <p>
            Convert colors between different formats instantly. Our free online
            color converter supports HEX, RGB, HSL, HSV, and CMYK formats,
            perfect for designers and developers.
          </p>

          <h3>Supported Formats</h3>
          <ul>
            <li>
              <strong>HEX:</strong> #RRGGBB format (e.g., #FF5733)
            </li>
            <li>
              <strong>RGB:</strong> Red, Green, Blue values (e.g., rgb(255, 87,
              51))
            </li>
            <li>
              <strong>HSL:</strong> Hue, Saturation, Lightness (e.g., hsl(9,
              100%, 60%))
            </li>
            <li>
              <strong>HSV:</strong> Hue, Saturation, Value format
            </li>
            <li>
              <strong>CMYK:</strong> Cyan, Magenta, Yellow, Black for print
            </li>
          </ul>

          <h3>How to Use</h3>
          <ol>
            <li>Enter a color in any supported format</li>
            <li>Click "Beautify" to convert</li>
            <li>Get instant results in all formats</li>
            <li>Copy any format you need</li>
          </ol>
        </div>
      </div>
    </>
  );
}
