'use client';
import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

const themes = {
  light: {
    text: "black",
    background: "white"
  },
  dark: {
    text: "white",
    background: "black"
  },
}

export const ThemeProvider = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  <ThemeContext.Provider value={[isDarkTheme, setIsDarkTheme, themes]}>
    {props.children}
  </ThemeContext.Provider>

  return;
}


