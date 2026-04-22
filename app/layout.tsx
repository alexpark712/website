import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Park",
  description: "Connecting the dots across people and systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
