// src/utils/performancemonitor.js

export function logPerformance() {
  if (performance && performance.getEntriesByType) {
    const metrics = performance.getEntriesByType("navigation")[0];
    console.table({
      TimeToFirstByte: metrics.responseStart - metrics.requestStart,
      DOMContentLoaded: metrics.domContentLoadedEventEnd - metrics.startTime,
      LoadTime: metrics.loadEventEnd - metrics.startTime
    });
  } else {
    console.warn("Performance API not supported in this browser.");
  }
}

export function trackRenderTime(componentName) {
  const start = performance.now();
  requestAnimationFrame(() => {
    const end = performance.now();
    console.log(`[Render Time] ${componentName}: ${(end - start).toFixed(2)}ms`);
  });
}
