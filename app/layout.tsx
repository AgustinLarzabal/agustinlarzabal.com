import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const inter = Outfit({
  variable: "--font-outfit",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agustín Larzábal - Front-End Developer",
  description: "Agustín Larzábal - Front-End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
