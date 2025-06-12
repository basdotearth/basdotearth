import type { ReactNode } from 'react';

import { Fira_Code, Grenze_Gotisch, IM_Fell_Great_Primer } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

import 'styles/reset.css';
import 'styles/globals.css';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: 'Bas Klinkhamer • %s',
    default: 'Bas Klinkhamer',
  },
  manifest: '/site.webmanifest?v=next',
  icons: {
    icon: [
      { url: '/favicon-16x16.png?v=next', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=next', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=next',
    apple: [{ url: '/apple-touch-icon.png?v=next', sizes: '180x180' }],
  },
};

// If loading a variable font, you don't need to specify the font weight
const heading = Grenze_Gotisch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const body = IM_Fell_Great_Primer({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const code = Fira_Code({
  subsets: ['latin-ext'],
  weight: ['400', '600'],
  display: 'swap',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en-gb" className={[heading.className, body.className, code.className].join(' ')}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
