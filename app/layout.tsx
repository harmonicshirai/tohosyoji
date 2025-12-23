import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "東方商事株式会社 | 中国産鉱物原料の専門商社",
  description: "タルク・炭酸カルシウム等の鉱物原料を、品質管理と安定供給でお届けします。中国2拠点体制による現地対応力と、ロット管理・証憑管理を軸とした品質保証体制で、調達の不安を安心に変えます。",
  keywords: "タルク, 炭酸カルシウム, 鉱物原料, 中国産, 輸入, 商社, 品質管理",
  openGraph: {
    title: "東方商事株式会社 | 中国産鉱物原料の専門商社",
    description: "タルク・炭酸カルシウム等の鉱物原料を、品質管理と安定供給でお届けします。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
