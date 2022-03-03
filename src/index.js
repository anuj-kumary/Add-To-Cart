import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "../src/ThemeProvider";
import App from "./App";
import { CartProvider } from "./CartProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
