import { Metadata } from "next";
import {
  generateToolMetadata,
  generateJsonLd,
  JsonLd,
} from "@/components/seo/meta-tags";
import { toolsConfig } from "@/lib/seo-config";
import { SQLBeautifierClient } from "./client";

const tool = toolsConfig.find((t) => t.id === "sql-beautifier")!;

export const metadata: Metadata = generateToolMetadata({
  title: tool.name,
  description: tool.longDescription,
  keywords: tool.keywords,
  path: tool.path,
});

export default function SQLBeautifierPage() {
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

        <SQLBeautifierClient />

        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>About SQL Beautifier</h2>
          <p>
            Format and beautify SQL queries online for free. Our SQL formatter
            supports MySQL, PostgreSQL, Oracle, SQL Server, and other database
            systems with proper syntax highlighting and indentation.
          </p>

          <h3>Features</h3>
          <ul>
            <li>
              <strong>Beautify SQL:</strong> Add proper indentation and line
              breaks
            </li>
            <li>
              <strong>Minify SQL:</strong> Remove unnecessary whitespace
            </li>
            <li>
              <strong>Keyword Highlighting:</strong> Uppercase SQL keywords
            </li>
            <li>
              <strong>Auto-indent:</strong> Smart indentation for subqueries
            </li>
            <li>
              <strong>Universal Support:</strong> Works with all SQL dialects
            </li>
          </ul>

          <h3>Supported SQL Statements</h3>
          <ul>
            <li>SELECT, FROM, WHERE, JOIN</li>
            <li>INSERT, UPDATE, DELETE</li>
            <li>CREATE, ALTER, DROP</li>
            <li>GROUP BY, ORDER BY, HAVING</li>
            <li>UNION, CASE, subqueries</li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li>Format messy SQL queries</li>
            <li>Debug complex SQL statements</li>
            <li>Prepare SQL for code review</li>
            <li>Learn SQL syntax and structure</li>
            <li>Optimize query readability</li>
          </ul>
        </div>
      </div>
    </>
  );
}
