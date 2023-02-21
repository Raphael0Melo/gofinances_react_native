import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
 

  useEffect(() => {
    Font.loadAsync({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_700Bold,
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
