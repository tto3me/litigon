import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./i18n/language-provider.tsx";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}
