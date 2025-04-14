import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
// layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Besley, Inter, Lexend } from "next/font/google";
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
      <body
        className={cn(
          "min-h-screen antialiased font-inter bg-background",
          lexend.variable,
          fontCode.variable,
          besleyFont.variable
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
