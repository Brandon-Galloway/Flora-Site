import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flora',
  description: 'An IoT Plant Monitoring Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen'>
          <header className='h-20 fixed top w-full z-50'>
            <Navbar/>
          </header>
          <div className='flex-1 mb-10 mt-20'>
            {children}
          </div>
          <footer className='bottom-3 h-10 fixed w-full z-50'>
            <Footer/>
          </footer>
        </div>
      </body>
    </html>
  )
}
