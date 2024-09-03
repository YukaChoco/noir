import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "起きろ！朝ごはんREAL.",
  description: "毎朝朝ごはんの写真を共有することで、互いに健康的な毎日をスタートすることができる新感覚SNSです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta property="og:image" content="/og-image.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
