import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});
