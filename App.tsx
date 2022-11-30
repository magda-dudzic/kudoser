import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React from "react";
import { ThemeProvider } from "styled-components";

import useCachedResources from "./app/hooks/useCachedResources";
import MainNavigation from "./app/navigation/MainNavigation";
import { theme } from "./app/static/theme";
import "react-native-gesture-handler";

export default function App() {
  const isLoaded = useCachedResources();
  return (
    <>
      <ThemeProvider theme={theme}>
        {isLoaded && <MainNavigation />}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
