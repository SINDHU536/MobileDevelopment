export const logDebug = (message: string, data?: any) => {
  console.log("[DEBUG]:", message, data ?? "");
};

export const logWarning = (message: string) => {
  console.warn("[WARNING]:", message);
};

export const logError = (message: string, error?: any) => {
  console.error("[ERROR]:", message, error ?? "");
};
