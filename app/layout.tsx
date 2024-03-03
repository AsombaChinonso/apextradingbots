

import './css/style.css'


import { Inter, Lexend, } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'



const inter = Lexend({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // weight: '400'
})

export const metadata = {
  title: 'ApexTradingBot',
  description: 'High-performing trading bots with profitable track records.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}

          
          <Banner />
        </div>
      </body>
    </html>
  )
}
