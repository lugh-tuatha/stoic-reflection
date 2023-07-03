import Navbar from '@/components/navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "THEKHTECH INC.",
  description: "Forms Holistic Digital Approaches to Grow Online Presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-11/12 container mx-auto">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
