"use client";

import { EditorLayout } from "@/components/tools/editor-layout";
import { formatSQL, minifySQL } from "@/features/formatters/sql-beautifier";

const defaultSQL = `SELECT u.id, u.name, u.email, o.order_date, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id WHERE o.total > 100 AND u.created_at > '2024-01-01' ORDER BY o.order_date DESC LIMIT 10;`;

export function SQLBeautifierClient() {
  return (
    <EditorLayout
      title="SQL Beautifier"
      inputLabel="Input SQL"
      outputLabel="Formatted SQL"
      inputPlaceholder="Paste your SQL query..."
      onFormat={formatSQL}
      onMinify={minifySQL}
      language="sql"
      defaultInput={defaultSQL}
    />
  );
}
