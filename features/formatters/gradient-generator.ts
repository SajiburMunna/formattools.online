export interface GradientConfig {
  type: "linear" | "radial";
  angle?: number;
  colors: Array<{ color: string; stop: number }>;
}

export function generateGradient(input: string): string {
  try {
    // Parse the input as JSON config
    const config: GradientConfig = JSON.parse(input);

    if (!config.colors || config.colors.length < 2) {
      throw new Error("At least 2 colors are required");
    }

    let css = "";
    let colorStops = "";

    // Build color stops
    config.colors.forEach((colorStop, index) => {
      colorStops += `${colorStop.color} ${colorStop.stop}%`;
      if (index < config.colors.length - 1) {
        colorStops += ", ";
      }
    });

    if (config.type === "linear") {
      const angle = config.angle || 90;
      css = `background: linear-gradient(${angle}deg, ${colorStops});`;
    } else if (config.type === "radial") {
      css = `background: radial-gradient(circle, ${colorStops});`;
    }

    // Generate additional CSS with vendor prefixes
    const result = {
      css: css,
      cssWithPrefixes: [
        `background: ${config.colors[0].color}; /* Fallback */`,
        config.type === "linear"
          ? `background: -webkit-linear-gradient(${
              config.angle || 90
            }deg, ${colorStops});`
          : `background: -webkit-radial-gradient(circle, ${colorStops});`,
        config.type === "linear"
          ? `background: -moz-linear-gradient(${
              config.angle || 90
            }deg, ${colorStops});`
          : `background: -moz-radial-gradient(circle, ${colorStops});`,
        css,
      ].join("\n"),
      preview: `<div style="${css} width: 100%; height: 200px; border-radius: 8px;"></div>`,
    };

    return JSON.stringify(result, null, 2);
  } catch (error) {
    // If not valid JSON, provide example
    if (error instanceof SyntaxError) {
      return JSON.stringify(
        {
          error: "Invalid JSON format",
          example: {
            type: "linear",
            angle: 135,
            colors: [
              { color: "#667eea", stop: 0 },
              { color: "#764ba2", stop: 100 },
            ],
          },
          hint: "Paste the example above and modify the colors!",
        },
        null,
        2
      );
    }
    throw new Error(
      `Gradient generation failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
