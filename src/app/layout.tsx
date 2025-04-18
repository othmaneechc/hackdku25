import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
// layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Besley, Inter, JetBrains_Mono, Lexend, Oswald } from "next/font/google";
import { ReactNode } from "react";
import "tailwindcss/tailwind.css";

import App from "@/components/app";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const besleyFont = Besley({
  subsets: ["latin"],
  variable: "--font-besley",
});

const fontCode = Inter({
  subsets: ["latin"],
  variable: "--font-code",
});

// Adding JetBrains Mono for monospace font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

// Adding Special Gothic Expanded One font for headings - imported through CSS
// We'll import the font via CSS since it's not available in the next/font/google package directly

// Adding Oswald font which has excellent support for expanded/stretched styles
const oswaldFont = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | HΔCKDKU",
    default: "HΔCKDKU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen antialiased font-inter bg-background",
          lexend.variable,
          fontCode.variable,
          besleyFont.variable,
          oswaldFont.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  );
}
