import type { Metadata } from 'next';
import { Google_Sans_Code } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const google_Sans_Code = Google_Sans_Code({
  variable: '--font-google-sans-code',
  subsets: ['latin'],
});

const myLocalFont = localFont({
  src: '../public/fonts/Archivo-Bold.woff2',
  variable: '--font-archivo-bold',
});

export const metadata: Metadata = {
  title: 'Sebastian Speiser / Web Developer Portfolio',
  description:
    'Portfolio of Sebastian Speiser, web developer. Projects, skills, and contact information.',
  applicationName: 'Sebastian Speiser Portfolio',
  keywords: [
    'Sebastian Speiser',
    'web developer',
    'portfolio',
    'frontend',
    'full stack',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Expo',
    'mobile development',
    'UI/UX',
    'web design',
    'software engineer',
  ],
  authors: [{ name: 'Sebastian Speiser' }],
  creator: 'Sebastian Speiser',
  publisher: 'Sebastian Speiser',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: 'var(--accent)' }}
        className={`${google_Sans_Code.variable} ${myLocalFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
