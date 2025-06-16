// src/utils/errorhandler.js

export function logError(error, context = '') {
  console.error(`[HexaNest Error] ${context}:`, error);

  // You can also send errors to an external service here (e.g. Sentry or your own API)
}

export function tryCatchWrapper(fn, context = '') {
  try {
    fn();
  } catch (error) {
    logError(error, context);
  }
}
export function handleError(error) {
  console.error('HexaNest Error:', error);
  // Optionally send to an error logging service
}
