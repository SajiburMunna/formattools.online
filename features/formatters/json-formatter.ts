export function formatJSON(input: string): string {
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed, null, 2);
  } catch (error) {
    throw new Error(
      `Invalid JSON: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export function minifyJSON(input: string): string {
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed);
  } catch (error) {
    throw new Error(
      `Invalid JSON: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export function validateJSON(input: string): {
  valid: boolean;
  error?: string;
} {
  try {
    JSON.parse(input);
    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
