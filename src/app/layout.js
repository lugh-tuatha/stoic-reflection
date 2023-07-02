import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icon: "KH-LOGO.ico",
  title: "THEKHTECH INC.",
  description: "Forms Holistic Digital Approaches to Grow Online Presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
