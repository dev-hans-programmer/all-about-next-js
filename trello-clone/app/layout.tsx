import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { appName } from '@/utils';

const inter = Inter({ subsets: ['latin'] });

// https://jsonplaceholder.typicode.com/todos/1

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: `${appName} is your first hand tool to manage any kinda projects`,
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
