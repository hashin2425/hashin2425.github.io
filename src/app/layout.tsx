import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  // Noto_Sansというフォントもあるが、それは日本語対応していないので使わないように注意する
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={notoSansJP.className + " min-w-[300px]"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
