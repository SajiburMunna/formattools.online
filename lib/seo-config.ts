export const siteConfig = {
  name: "FormatTools.online",
  title: "Free Online Formatters & Converters for Developers",
  description:
    "Beautify, convert, and optimize your code or data instantly — all in your browser. JSON formatter, CSV converter, HTML beautifier, and more developer tools.",
  url: "https://formattools.online",
  ogImage: "/og-image.png",
  keywords: [
    "formatter",
    "beautifier",
    "converter",
    "JSON formatter",
    "CSV converter",
    "HTML beautifier",
    "code formatter",
    "online tools",
    "developer tools",
    "free formatter",
    "code beautifier",
    "data converter",
  ],
  author: "FormatTools",
  creator: "@formattools",
};

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  path: string;
  keywords: string[];
  category: string;
}

export const toolsConfig: Tool[] = [
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Beautify and validate JSON data with syntax highlighting",
    longDescription:
      "Free online JSON formatter and validator. Beautify, minify, and validate JSON data instantly with syntax highlighting. Perfect for developers working with APIs and configuration files.",
    icon: "braces",
    path: "/tools/json-formatter",
    keywords: [
      "json",
      "formatter",
      "beautifier",
      "validator",
      "minifier",
      "json viewer",
    ],
    category: "data",
  },
  {
    id: "csv-to-json",
    name: "CSV to JSON Converter",
    description: "Convert CSV files to JSON format instantly",
    longDescription:
      "Convert CSV (Comma Separated Values) to JSON format online. Free tool with instant conversion, preview, and download options. Perfect for data migration and API integration.",
    icon: "file-json",
    path: "/tools/csv-to-json",
    keywords: ["csv", "json", "converter", "csv to json", "data converter"],
    category: "converter",
  },
  {
    id: "html-beautifier",
    name: "HTML Beautifier",
    description: "Format and prettify HTML code with proper indentation",
    longDescription:
      "Online HTML beautifier and formatter. Clean up messy HTML code with proper indentation and formatting. Free tool for web developers to format HTML instantly.",
    icon: "code",
    path: "/tools/html-beautifier",
    keywords: [
      "html",
      "beautifier",
      "formatter",
      "html formatter",
      "code formatter",
    ],
    category: "code",
  },
  {
    id: "color-converter",
    name: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and other color formats",
    longDescription:
      "Convert colors between HEX, RGB, HSL, HSV, and CMYK formats. Free online color converter for designers and developers with live preview.",
    icon: "palette",
    path: "/tools/color-converter",
    keywords: ["color", "converter", "hex", "rgb", "hsl", "color picker"],
    category: "design",
  },
  {
    id: "gradient-generator",
    name: "Gradient Generator",
    description: "Create beautiful CSS gradients with live preview",
    longDescription:
      "Create stunning CSS gradients with our free online gradient generator. Linear and radial gradients with live preview and CSS code export.",
    icon: "sparkles",
    path: "/tools/gradient-generator",
    keywords: [
      "gradient",
      "css",
      "generator",
      "gradient generator",
      "css gradient",
    ],
    category: "design",
  },
  {
    id: "svg-cleaner",
    name: "SVG Cleaner",
    description: "Optimize and minify SVG files",
    longDescription:
      "Optimize and compress SVG files online. Remove unnecessary metadata and reduce file size while maintaining quality. Free SVG optimizer for web developers.",
    icon: "image",
    path: "/tools/svg-cleaner",
    keywords: ["svg", "optimizer", "cleaner", "svg optimizer", "minify svg"],
    category: "optimization",
  },
  {
    id: "markdown-previewer",
    name: "Markdown Previewer",
    description: "Preview Markdown with live rendering",
    longDescription:
      "Free online Markdown editor and previewer with live rendering. Write Markdown and see the HTML output in real-time. Perfect for README files and documentation.",
    icon: "file-text",
    path: "/tools/markdown-previewer",
    keywords: [
      "markdown",
      "previewer",
      "md",
      "markdown editor",
      "markdown to html",
    ],
    category: "writing",
  },
  {
    id: "sql-beautifier",
    name: "SQL Beautifier",
    description: "Format SQL queries with proper syntax",
    longDescription:
      "Format and beautify SQL queries online. Free SQL formatter with syntax highlighting for MySQL, PostgreSQL, Oracle, and more database systems.",
    icon: "database",
    path: "/tools/sql-beautifier",
    keywords: [
      "sql",
      "formatter",
      "beautifier",
      "sql formatter",
      "query formatter",
    ],
    category: "database",
  },
];

export const categories = [
  { id: "all", name: "All Tools", count: toolsConfig.length },
  {
    id: "data",
    name: "Data",
    count: toolsConfig.filter((t) => t.category === "data").length,
  },
  {
    id: "code",
    name: "Code",
    count: toolsConfig.filter((t) => t.category === "code").length,
  },
  {
    id: "converter",
    name: "Converters",
    count: toolsConfig.filter((t) => t.category === "converter").length,
  },
  {
    id: "design",
    name: "Design",
    count: toolsConfig.filter((t) => t.category === "design").length,
  },
  {
    id: "optimization",
    name: "Optimization",
    count: toolsConfig.filter((t) => t.category === "optimization").length,
  },
];
