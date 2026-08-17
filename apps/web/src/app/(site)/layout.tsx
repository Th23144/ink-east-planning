import type { Metadata } from "next";
import "../globals.css";
import "../commerce.css";

export const metadata: Metadata = {
  title: "Ink & East · Spatial Flow",
  description: "Source-native editorial and commerce platform for Ink & East and Spatial Flow."
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
