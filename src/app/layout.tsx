import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ДиАйСтрой | Промышленное строительство и монтаж металлоконструкций",
  description: "Генподрядная организация. Комплексное строительство промышленных и складских объектов. СРО, лицензии, собственный парк техники. Монтаж инженерных сетей.",
  keywords: "Монтаж металлоконструкций, строительство складов, промышленные здания, сборные фундаменты, монтаж сэндвич-панелей, ОВиК, НВК, ДиАйСтрой",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.className} antialiased bg-zinc-950 text-zinc-50`}>
        {children}
      </body>
    </html>
  );
}
