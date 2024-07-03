import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI For All",
  description: "Digital AI Teaching Assistant for teachers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
