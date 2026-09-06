import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Public_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RobotAssistant } from '../components/RobotAssistant';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['500', '700'],
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sunloop Energy — Intelligent Energy Infrastructure',
    template: '%s · Sunloop Energy',
  },
  description:
    'Solar power plants, energy storage systems, and EV charging infrastructure — connected through one AI energy management portal. Designed, built, and managed by Sunloop Energy.',
  keywords: [
    'solar power',
    'energy storage',
    'EV charging',
    'AI energy management',
    'clean energy',
    'Sunloop Energy',
  ],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Sunloop Energy — Intelligent Energy Infrastructure',
    description:
      'Solar power plants, energy storage systems, and EV charging infrastructure — connected through one AI energy management portal.',
    url: 'https://www.sunloopenergy.com',
    siteName: 'Sunloop Energy',
    images: [
      {
        url: '/images/solar-hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Sunloop Energy — Solar, Storage, and EV Charging Infrastructure',
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
    <html lang="en" className={`${plusJakartaSans.variable} ${publicSans.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/solar-hero-bg-4k.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={publicSans.className}>
        <Navbar />
        {children}
        <RobotAssistant />
        <Footer />
      </body>
    </html>
  );
}
