import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AmmaJaan eCommerce',
  description:
    'Unleash the Power of Online Shopping: Discover an Ecommerce Wonderland with Our Unbeatable Selection, Exclusive Deals, and Seamless Shopping Experience. Shop Now and Transform Your Retail Therapy!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
