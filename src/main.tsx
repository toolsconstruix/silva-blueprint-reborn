import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Preload critical image
const heroImage = new Image();
heroImage.src = new URL('./assets/hero-house.jpg', import.meta.url).href;

createRoot(document.getElementById("root")!).render(<App />);
