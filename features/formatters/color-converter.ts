export interface ColorResult {
  hex: string;
  rgb: string;
  hsl: string;
  hsv: string;
  cmyk: string;
}

export function hexToRgb(
  hex: string
): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

function rgbToHsl(
  r: number,
  g: number,
  b: number
): {
  h: number;
  s: number;
  l: number;
} {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function rgbToHsv(
  r: number,
  g: number,
  b: number
): {
  h: number;
  s: number;
  v: number;
} {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
}

function rgbToCmyk(
  r: number,
  g: number,
  b: number
): {
  c: number;
  m: number;
  y: number;
  k: number;
} {
  let c = 1 - r / 255;
  let m = 1 - g / 255;
  let y = 1 - b / 255;
  const k = Math.min(c, m, y);

  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  c = Math.round(((c - k) / (1 - k)) * 100);
  m = Math.round(((m - k) / (1 - k)) * 100);
  y = Math.round(((y - k) / (1 - k)) * 100);

  return { c, m, y, k: Math.round(k * 100) };
}

export function convertColor(input: string): string {
  try {
    input = input.trim().toLowerCase();

    let r = 0,
      g = 0,
      b = 0;

    // Parse HEX
    if (input.startsWith("#")) {
      const rgb = hexToRgb(input);
      if (!rgb) throw new Error("Invalid HEX color");
      r = rgb.r;
      g = rgb.g;
      b = rgb.b;
    }
    // Parse RGB
    else if (input.startsWith("rgb")) {
      const match = input.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (!match)
        throw new Error("Invalid RGB format. Use: rgb(255, 255, 255)");
      r = parseInt(match[1]);
      g = parseInt(match[2]);
      b = parseInt(match[3]);
    }
    // Parse HSL
    else if (input.startsWith("hsl")) {
      const match = input.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
      if (!match)
        throw new Error("Invalid HSL format. Use: hsl(360, 100%, 50%)");

      const h = parseInt(match[1]) / 360;
      const s = parseInt(match[2]) / 100;
      const l = parseInt(match[3]) / 100;

      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      if (s === 0) {
        r = g = b = l * 255;
      } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3) * 255;
        g = hue2rgb(p, q, h) * 255;
        b = hue2rgb(p, q, h - 1 / 3) * 255;
      }
    } else {
      throw new Error(
        "Invalid color format. Supported: HEX (#RRGGBB), RGB (rgb(r, g, b)), HSL (hsl(h, s%, l%))"
      );
    }

    // Convert to all formats
    const hex = rgbToHex(r, g, b);
    const rgb = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    const hsl = rgbToHsl(r, g, b);
    const hsv = rgbToHsv(r, g, b);
    const cmyk = rgbToCmyk(r, g, b);

    const result: ColorResult = {
      hex: hex.toUpperCase(),
      rgb: rgb,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      hsv: `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`,
      cmyk: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`,
    };

    return JSON.stringify(result, null, 2);
  } catch (error) {
    throw new Error(
      `Color conversion failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
