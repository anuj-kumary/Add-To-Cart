import React, { createContext, useContext, useState } from "react";

const defaultThemeContextValue = {
  theme: "light"
};

const ThemeContext = createContext(defaultThemeContextValue);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultThemeContextValue.theme);

  const changeTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
