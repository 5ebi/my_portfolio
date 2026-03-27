import type { Metadata } from 'next';
import './globals.css';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
