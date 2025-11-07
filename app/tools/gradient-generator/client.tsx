"use client";

import { useState } from "react";
import { ColorPicker } from "@/components/tools/color-picker";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Plus, Trash2 } from "lucide-react";

interface ColorStop {
  color: string;
  stop: number;
}

export function GradientGeneratorClient() {
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(135);
  const [colors, setColors] = useState<ColorStop[]>([
    { color: "#667eea", stop: 0 },
    { color: "#764ba2", stop: 100 },
  ]);
  const [copied, setCopied] = useState(false);

  const generateCSS = () => {
    const colorStops = colors.map((c) => `${c.color} ${c.stop}%`).join(", ");

    if (type === "linear") {
      return `background: linear-gradient(${angle}deg, ${colorStops});`;
    } else {
      return `background: radial-gradient(circle, ${colorStops});`;
    }
  };

  const generateFullCSS = () => {
    const colorStops = colors.map((c) => `${c.color} ${c.stop}%`).join(", ");

    const lines = [
      `background: ${colors[0].color}; /* Fallback */`,
      type === "linear"
        ? `background: -webkit-linear-gradient(${angle}deg, ${colorStops});`
        : `background: -webkit-radial-gradient(circle, ${colorStops});`,
      type === "linear"
        ? `background: -moz-linear-gradient(${angle}deg, ${colorStops});`
        : `background: -moz-radial-gradient(circle, ${colorStops});`,
      generateCSS(),
    ];

    return lines.join("\n");
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addColor = () => {
    const newStop =
      colors.length > 0 ? colors[colors.length - 1].stop + 10 : 50;
    setColors([...colors, { color: "#000000", stop: Math.min(newStop, 100) }]);
  };

  const removeColor = (index: number) => {
    if (colors.length > 2) {
      setColors(colors.filter((_, i) => i !== index));
    }
  };

  const updateColor = (index: number, color: string) => {
    const updated = [...colors];
    updated[index].color = color;
    setColors(updated);
  };

  const updateStop = (index: number, stop: number) => {
    const updated = [...colors];
    updated[index].stop = Math.max(0, Math.min(100, stop));
    setColors(updated);
  };

  const css = generateCSS();
  const fullCSS = generateFullCSS();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="space-y-6">
        {/* Gradient Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="w-full h-48 rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-700"
              style={{
                background:
                  type === "linear"
                    ? `linear-gradient(${angle}deg, ${colors
                        .map((c) => `${c.color} ${c.stop}%`)
                        .join(", ")})`
                    : `radial-gradient(circle, ${colors
                        .map((c) => `${c.color} ${c.stop}%`)
                        .join(", ")})`,
              }}
            />
          </CardContent>
        </Card>

        {/* Gradient Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Gradient Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Type Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Gradient Type</label>
              <div className="flex gap-2">
                <Button
                  variant={type === "linear" ? "default" : "outline"}
                  onClick={() => setType("linear")}
                  className="flex-1"
                >
                  Linear
                </Button>
                <Button
                  variant={type === "radial" ? "default" : "outline"}
                  onClick={() => setType("radial")}
                  className="flex-1"
                >
                  Radial
                </Button>
              </div>
            </div>

            {/* Angle Control (only for linear) */}
            {type === "linear" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Angle: {angle}°</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            {/* Color Stops */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Color Stops</label>
                <Button size="sm" onClick={addColor} variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Color
                </Button>
              </div>

              {colors.map((colorStop, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex-1 space-y-2">
                    <ColorPicker
                      value={colorStop.color}
                      onChange={(color) => updateColor(index, color)}
                      label={`Color ${index + 1}`}
                    />
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        Position:
                      </label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={colorStop.stop}
                        onChange={(e) =>
                          updateStop(index, Number(e.target.value))
                        }
                        className="w-20"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        %
                      </span>
                    </div>
                  </div>
                  {colors.length > 2 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeColor(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Generated CSS */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Generated CSS</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(fullCSS)}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy CSS
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{fullCSS}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
