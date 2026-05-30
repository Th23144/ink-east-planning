import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ink & East Level 1 Architecture Prototype",
  description: "Source-native journal system scaffold for Ink & East."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
