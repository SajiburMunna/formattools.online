"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Trash2, Check } from "lucide-react";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-lg">
      <p className="text-gray-500">Loading editor...</p>
    </div>
  ),
});

interface EditorLayoutProps {
  title: string;
  inputLabel?: string;
  outputLabel?: string;
  inputPlaceholder?: string;
  onFormat: (input: string) => string | Promise<string>;
  onMinify?: (input: string) => string | Promise<string>;
  language?: string;
  defaultInput?: string;
}

export function EditorLayout({
  title,
  inputLabel = "Input",
  outputLabel = "Output",
  inputPlaceholder = "Paste your code here...",
  onFormat,
  onMinify,
  language = "javascript",
  defaultInput = "",
}: EditorLayoutProps) {
  const [input, setInput] = useState(defaultInput);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFormat = useCallback(async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    try {
      const result = await Promise.resolve(onFormat(input));
      setOutput(result);
    } catch (error) {
      setOutput(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
    setIsProcessing(false);
  }, [input, onFormat]);

  const handleMinify = useCallback(async () => {
    if (!input.trim() || !onMinify) return;
    setIsProcessing(true);
    try {
      const result = await Promise.resolve(onMinify(input));
      setOutput(result);
    } catch (error) {
      setOutput(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
    setIsProcessing(false);
  }, [input, onMinify]);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `formatted-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleFormat} disabled={!input.trim() || isProcessing}>
          {isProcessing ? "Processing..." : "Beautify"}
        </Button>
        {onMinify && (
          <Button
            onClick={handleMinify}
            variant="secondary"
            disabled={!input.trim() || isProcessing}
          >
            Minify
          </Button>
        )}
        <Button onClick={handleCopy} variant="outline" disabled={!output}>
          {copied ? (
            <Check className="h-4 w-4 mr-2" />
          ) : (
            <Copy className="h-4 w-4 mr-2" />
          )}
          {copied ? "Copied!" : "Copy"}
        </Button>
        <Button onClick={handleDownload} variant="outline" disabled={!output}>
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
        <Button onClick={handleClear} variant="ghost">
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>

      {/* Editors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input Editor */}
        <div className="space-y-2">
          <label className="text-sm font-medium">{inputLabel}</label>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden h-[600px]">
            <MonacoEditor
              height="100%"
              language={language}
              value={input}
              onChange={(value) => setInput(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: true,
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>

        {/* Output Editor */}
        <div className="space-y-2">
          <label className="text-sm font-medium">{outputLabel}</label>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden h-[600px]">
            <MonacoEditor
              height="100%"
              language={language}
              value={output}
              theme="vs-dark"
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: true,
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
