import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navigation from "../components/Navigation";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hashin Portfolio",
  description: "This is a portfolio site of Hashin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSans.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
