import React from "react";
import { createRoot } from "react-dom/client";
import DestinationWidget from "./DestinationWidget";

// Expose a global function to render the widget into a target element
window.renderKultripWidget = function (domId) {
  const container = document.getElementById(domId);
  if (!container) {
    throw new Error("Container not found: " + domId);
  }
  createRoot(container).render(<DestinationWidget />);
};