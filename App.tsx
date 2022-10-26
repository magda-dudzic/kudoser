import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './app/static/theme';
import MainNavigation from './navigation/MainNavigation';
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainNavigation />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
