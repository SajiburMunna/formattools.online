"use client";

import { useState, useEffect } from "react";
import { ColorPicker } from "@/components/tools/color-picker";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check } from "lucide-react";
import {
  convertColor,
  ColorResult,
} from "@/features/formatters/color-converter";

export function ColorConverterClient() {
  const [color, setColor] = useState("#3b82f6");
  const [inputValue, setInputValue] = useState("#3b82f6");
  const [result, setResult] = useState<ColorResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string>("");

  useEffect(() => {
    handleConvert(color);
  }, [color]);

  const handleConvert = (value: string) => {
    try {
      const converted = convertColor(value);
      const parsed = JSON.parse(converted) as ColorResult;
      setResult(parsed);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid color format");
      setResult(null);
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.trim()) {
      handleConvert(value);
    }
  };

  const handleCopy = async (text: string, format: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(format);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="space-y-6">
        {/* Color Picker Section */}
        <Card>
          <CardHeader>
            <CardTitle>Choose a Color</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ColorPicker
              value={color}
              onChange={setColor}
              label="Pick a color"
            />

            <div className="space-y-2">
              <label className="text-sm font-medium">Or enter manually:</label>
              <Input
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter: #FF5733, rgb(255, 87, 51), or hsl(9, 100%, 60%)"
                className="font-mono"
              />
            </div>

            {error && (
              <div className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                {error}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Color Preview */}
        {result && (
          <Card>
            <CardHeader>
              <CardTitle>Color Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-32 rounded-lg border-2 border-gray-300 dark:border-gray-700 shadow-lg"
                style={{ backgroundColor: result.hex }}
              />
            </CardContent>
          </Card>
        )}

        {/* Converted Formats */}
        {result && (
          <Card>
            <CardHeader>
              <CardTitle>Converted Formats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(result).map(([format, value]) => (
                <div
                  key={format}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">
                      {format}
                    </div>
                    <div className="font-mono text-lg">{value}</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(value, format)}
                  >
                    {copied === format ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
