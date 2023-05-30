import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar/page'
import Footer from './Footer/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Zone',
  description: 'Blogs',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
