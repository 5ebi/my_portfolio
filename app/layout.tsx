import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const archivoBold = localFont({
  src: '../public/fonts/Archivo-Bold.woff2',
  variable: '--font-archivo-bold',
});

const archivoMedium = localFont({
  src: '../public/fonts/Archivo-Medium.woff2',
  variable: '--font-archivo-medium',
});

const archivoRegular = localFont({
  src: '../public/fonts/Archivo-Regular.woff2',
  variable: '--font-archivo-regular',
});

const archivoSemiBold = localFont({
  src: '../public/fonts/Archivo-SemiBold.woff2',
  variable: '--font-archivo-semibold',
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
        className={`${archivoBold.variable} ${archivoMedium.variable} ${archivoRegular.variable} ${archivoSemiBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
