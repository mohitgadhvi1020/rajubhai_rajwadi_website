import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartAnimation from './components/CartAnimation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rajubhai\'s Rajwadi | Premium Incense Sticks & Tea',
  description: 'Premium incense sticks, dhup, and finest tea blends for spiritual wellness. Experience divine tranquility with our sacred collection.',
  icons: {
    icon: '/images/rajwadi-products/Rajwadi Rajubhai Logo.png',
    shortcut: '/images/rajwadi-products/Rajwadi Rajubhai Logo.png',
    apple: '/images/rajwadi-products/Rajwadi Rajubhai Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <CartAnimation />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
