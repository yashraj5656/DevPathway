import React from "react";
import "./Frontend.css";

export default function FrontendPerformance() {
  const bestPractices = [
    {
      step: "Step 1: Optimize Asset Loading",
      items: [
        "Compress Images (WebP, AVIF formats recommended)",
        "Minify and Bundle JavaScript & CSS files",
        "Use Lazy Loading for Images and Components",
        "Serve Static Assets via a CDN"
      ]
    },
    {
      step: "Step 2: Improve Initial Load Time",
      items: [
        "Implement Code Splitting (React.lazy, dynamic imports)",
        "Use Server-Side Rendering (SSR) for Critical Pages",
        "Prefetch or Preload Important Assets",
        "Optimize Fonts (Subset and Use font-display: swap)"
      ]
    },
    {
      step: "Step 3: Reduce JavaScript Impact",
      items: [
        "Remove Unused Code (Tree Shaking)",
        "Avoid Blocking the Main Thread with Heavy Scripts",
        "Debounce and Throttle Event Listeners",
        "Use Web Workers for Heavy Computations"
      ]
    },
    {
      step: "Step 4: Optimize CSS & Styling",
      items: [
        "Minimize CSS File Size (Purge Unused Styles)",
        "Avoid Inline Large CSS Blocks",
        "Use Critical CSS for Above-the-Fold Content",
        "Leverage Modern Layouts (Flexbox, Grid)"
      ]
    },
    {
      step: "Step 5: Boost Network and HTTP Performance",
      items: [
        "Use HTTP/2 or HTTP/3 for Faster Asset Delivery",
        "Enable Gzip or Brotli Compression",
        "Implement Efficient Caching Strategies (Cache-Control, ETags)",
        "Optimize API Calls (Reduce, Debounce, Cache Responses)"
      ]
    },
    {
      step: "Step 6: Performance Monitoring",
      items: [
        "Measure Core Web Vitals (LCP, FID, CLS)",
        "Use Lighthouse and PageSpeed Insights",
        "Monitor with Real User Monitoring (RUM) Tools (e.g., Sentry, Datadog, New Relic)",
        "Continuously Track Errors and Performance Bottlenecks"
      ]
    },
    {
      step: "Step 7: UX and Responsiveness",
      items: [
        "Ensure Fast Time to Interactive (TTI)",
        "Optimize Touch and Scroll Performance",
        "Minimize Layout Shifts During Load",
        "Support Responsive Design and Adaptive Loading"
      ]
    }
  ];

  return (
    <div className="frontend-container">
      <h1 className="frontend-title">Frontend Performance Best Practices</h1>
      <p className="frontend-description">
        Improve your website's load speed, responsiveness, and user experience by following these frontend optimization practices.
      </p>

      {bestPractices.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.step}</h2>
          <ul className="frontend-list">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
