import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Roboto_Mono } from "next/font/google";
import DuckCursor from "@/components/DuckCursor";
import Snowfall from "@/lib/useSnow";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duc Portfolio",
  description: "This is my life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased`}
      >
          <DuckCursor/>
          <Snowfall/>
          {children}
      </body>
    </html>
  );
}
