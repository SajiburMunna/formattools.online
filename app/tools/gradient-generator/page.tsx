import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { GradientGeneratorClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "gradient-generator")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function GradientGeneratorPage() {
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

        <GradientGeneratorClient />

        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About CSS Gradient Generator</h2>
          <p>
            Create beautiful CSS gradients with our free online generator.
            Support for linear and radial gradients with multiple color stops
            and customizable angles.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Linear gradients with custom angles</li>
            <li>Radial gradients with circular patterns</li>
            <li>Multiple color stops</li>
            <li>CSS code with vendor prefixes</li>
            <li>Copy-ready code for production</li>
          </ul>

          <h3>Configuration Format</h3>
          <p>Use JSON to configure your gradient:</p>
          <pre>
            {`{
  "type": "linear",
  "angle": 135,
  "colors": [
    { "color": "#667eea", "stop": 0 },
    { "color": "#764ba2", "stop": 100 }
  ]
}`}
          </pre>
        </div>
      </div>
    </>
  );
}
