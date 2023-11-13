import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './ui/shared/footer/Footer'
import Navbar from './ui/shared/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mawego Technical Training Institution',
  description: 'We are an institution ready to train and make you fit for the desired skill area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center'>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='max-w-screen-lg mx-auto'>
              {children}
            </main>
            <div className=' top-full sticky'>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
