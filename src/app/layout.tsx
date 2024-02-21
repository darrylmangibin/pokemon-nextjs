"use client";

import "./globals.css";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/hooks";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import style from "./page.module.css";
import { useThemeMode } from "@/hooks/theme.hook";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mode = useThemeMode((state) => state.mode);

  const darkTheme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#228ce2",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <html lang="en">
        <body className={mode === "dark" ? style.darkBody : ""}>
          <QueryClientProvider client={queryClient}>
            <Header />
            <Box mt={16} paddingInline={4}>
              {children}
            </Box>
          </QueryClientProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
