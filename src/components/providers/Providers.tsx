"use client";

import { Provider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { store } from "@/lib/store/store";
import theme from "@/theme/theme";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cacheRtl}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <NextThemeProvider attribute="class" defaultTheme="light">
            {children}
          </NextThemeProvider>
        </Provider>
      </MUIThemeProvider>
    </CacheProvider>
  );
}
