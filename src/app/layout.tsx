import type { Metadata, Viewport } from 'next';
import { site } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    'palestrante segurança do trabalho',
    'palestra SIPAT',
    'palestrante para SIPAT',
    'palestra percepção de riscos',
    'comportamento seguro',
    'neurociência e segurança do trabalho',
    'palestra corporativa segurança',
    'cultura de segurança',
    'palestra para líderes sobre segurança',
    'fatores psicossociais',
  ],
  authors: [{ name: 'Lucas Galdino' }],
  creator: 'Lucas Galdino',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: 'Lucas Galdino · Palestras Corporativas',
    title: site.title,
    description:
      'Palestras corporativas que conectam neurociência, comportamento humano e Segurança do Trabalho para que o risco volte a ser percebido antes de se transformar em acidente. +200 palestras · audiência em 95 países.',
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Lucas Galdino · Palestras corporativas sobre segurança, comportamento e percepção de riscos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description:
      'Palestras que conectam neurociência, comportamento humano e Segurança do Trabalho para despertar consciência e fortalecer a cultura de prevenção.',
    images: [site.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#070B12',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* fontes self-hosted: 3 arquivos, 86 KB no total — nada bloqueia o LCP */}
        <link rel="preload" as="font" type="font/woff2" href="/fonts/archivo-latin.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin.woff2" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/images/hero-lucas-1100.webp"
          imageSrcSet="/images/hero-lucas-760.webp 760w, /images/hero-lucas-1100.webp 1100w, /images/hero-lucas-1400.webp 1400w"
          imageSizes="(max-width: 980px) 100vw, 52vw"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
