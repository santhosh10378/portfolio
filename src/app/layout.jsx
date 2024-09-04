import './globals.css';

import { Outfit, Playfair_Display } from 'next/font/google';

import { cn } from '@/lib/utils';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata = {
  title: 'PixelSwift | Your Gateway to Cutting-Edge Tech Solutions',
  description: 'PixelSwift offers innovative tech solutions and digital experiences to help you stay ahead in a rapidly evolving digital landscape.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col font-sans antialiased ', outfit.variable, playfair.variable)}>
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
