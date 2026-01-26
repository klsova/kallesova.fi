import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";

// Configure the Linux-style font
const ubuntuFont = Ubuntu({ 
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "kallesova.fi",
  description: "kallesova.fi",
  icons: {
    icon: "/letter-k.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ubuntuFont.className}>
        <Providers>
          <Navbar /> 
          {children}
        </Providers>
      </body>
    </html>
  );
}