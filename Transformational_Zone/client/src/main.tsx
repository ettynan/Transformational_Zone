import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  // Ensure the skip link target is focusable
  rootElement.setAttribute("tabindex", "-1");

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
