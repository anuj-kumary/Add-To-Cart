import { ProductListing } from "./components/ProductListing";
import { useTheme } from "./ThemeProvider";
//import { Cart } from "./components/Cart";

import "./styles.css";

export default function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button className="btn btn-theme" onClick={changeTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>

      <ProductListing />
    </div>
  );
}
