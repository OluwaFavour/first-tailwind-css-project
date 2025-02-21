import type { Metadata } from "next";
import { Montserrat, Palanquin } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const palanquin = Palanquin({
  variable: "--font-palanquin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nike",
  description: "Developed by 3vil_codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${palanquin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
