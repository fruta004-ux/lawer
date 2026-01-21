import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정평법률사무소 | 경매 전문 법률 서비스",
  description: "20년 경력의 경매 전문 법률사무소. 권리분석부터 명도까지 원스톱 서비스. 98.7% 성공률로 안전한 경매 투자를 도와드립니다.",
  keywords: "경매, 부동산경매, 법률사무소, 권리분석, 명도소송, 입찰대리, 경매투자",
  openGraph: {
    title: "정평법률사무소 | 경매 전문 법률 서비스",
    description: "20년 경력의 경매 전문 법률사무소. 권리분석부터 명도까지 원스톱 서비스.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
