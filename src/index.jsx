import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
);
