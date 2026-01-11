import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Configure the Linux-style font
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains", 
});

export const metadata: Metadata = {
  title: "kallesova@mysite: ~/$",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}