'use client';

import { Kantumruy_Pro } from 'next/font/google';
import "./globals.scss";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const KantumruyPro = Kantumruy_Pro({ subsets: ['khmer', 'latin'] });
const theme = createTheme({
  typography: {
      fontFamily: [
          KantumruyPro.style.fontFamily,
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
      ].join(',')
  }
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={KantumruyPro.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
