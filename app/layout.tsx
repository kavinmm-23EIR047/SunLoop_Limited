import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RobotAssistant } from '../components/RobotAssistant';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sunloop Energy — Intelligent Energy Infrastructure',
    template: '%s · Sunloop Energy',
  },
  description:
    'Solar power plants, energy storage systems and EV charging infrastructure connected through one AI energy management portal. Designed, built and managed by Sunloop Energy.',
  keywords: [
    'solar power',
    'energy storage',
    'EV charging',
    'AI energy management',
    'clean energy',
    'Sunloop Energy',
  ],
  icons: {
    icon: '/favicon-loop.png?v=6',
    shortcut: '/favicon-loop.png?v=6',
    apple: '/favicon-loop.png?v=6',
  },
  openGraph: {
    title: 'Sunloop Energy — Intelligent Energy Infrastructure',
    description:
      'Solar power plants, energy storage systems and EV charging infrastructure connected through one AI energy management portal.',
    url: 'https://www.sunloopenergy.com',
    siteName: 'Sunloop Energy',
    images: [
      {
        url: '/images/solar-hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Sunloop Energy — Solar, Storage and EV Charging Infrastructure',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://www.sunloopenergy.com'),
  alternates: {
    canonical: '/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/solar-hero-bg.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/images/solar-hero-bg-mobile.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
        />
      </head>
      <body className="font-sans antialiased text-brand-ink bg-white">
        <Navbar />
        {children}
        <RobotAssistant />
        <Footer />
      </body>
    </html>
  );
}
