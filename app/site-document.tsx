import InsightsScript from "next/script";
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function SiteDocument({ children, language }: { children: React.ReactNode; language: 'pt-PT' | 'en' }) {
  return (
    <html lang={language}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<InsightsScript src="https://insights.bittrees.org/consent.js" data-insights-site="cryptoalegre" strategy="afterInteractive" />
      </body>
    </html>
  );
}
