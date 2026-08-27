import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cryptoalegre.org'),
  title: 'Cryptoalegre — Cultura, educação e tecnologia',
  description:
    'Associação cultural e educativa no Alentejo dedicada à cultura, à educação e às tecnologias descentralizadas.',
  alternates: {
    canonical: '/',
    languages: { 'pt-PT': '/', en: '/en' },
  },
  icons: { icon: '/favicon.jpg' },
  openGraph: {
    title: 'Cryptoalegre — Cultura, Educação e Tecnologia',
    description: 'Cultura lidera. A tecnologia possibilita. A educação liga.',
    url: '/',
    siteName: 'Cryptoalegre',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Cryptoalegre — Cultura, Educação e Tecnologia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cryptoalegre — Cultura, Educação e Tecnologia',
    description: 'Cultura lidera. A tecnologia possibilita. A educação liga.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
