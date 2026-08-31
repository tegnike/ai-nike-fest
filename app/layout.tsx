import type { Metadata } from 'next';
import { Noto_Sans_JP, Space_Grotesk } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans_JP({ variable: '--font-noto', subsets: ['latin'] });
const space = Space_Grotesk({ variable: '--font-space', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-nike-fest-2026.tegnike.chatgpt.site'),
  title: 'AIニケフェス | AIニケちゃんサーバー1周年',
  description: 'AIニケちゃんDiscordサーバー1周年を祝う、コミュニティ作品のオンライン展示会。',
  openGraph: {
    title: 'AIニケフェス | AIニケちゃんサーバー1周年',
    description: 'ゲーム・映像・音楽・ツール。コミュニティから届いた17作品をまとめて紹介します。',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AIニケフェス' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIニケフェス | AIニケちゃんサーバー1周年',
    description: 'コミュニティから届いた17作品をまとめて紹介します。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${noto.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
