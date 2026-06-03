import type { Metadata } from 'next';
import { Roboto_Slab, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const headFont = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-head',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alroofingleeds.co.uk'),
  title: 'A & L Roofing Leeds Ltd | Roofers in Leeds & Yorkshire — Est. 1996',
  icons: { icon: '/favicon.png' },
  description:
    'Family-run Leeds roofing contractor with 25+ years’ experience. Re-roofs, repairs, flat roofs, slating, tiling, leadwork & guttering across Yorkshire. 24/7 emergency callout. Call 0113 264 4705.',
  keywords: [
    'roofers Leeds',
    'roofing contractor Leeds',
    'flat roof Leeds',
    're-roof Yorkshire',
    'emergency roof repair Leeds',
    'slating tiling Leeds',
  ],
  openGraph: {
    title: 'A & L Roofing Leeds Ltd | Roofers in Leeds & Yorkshire',
    description:
      'Family-run roofing contractor serving Leeds and the whole of Yorkshire since 1996. 24/7 emergency callout.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${headFont.variable} ${bodyFont.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
