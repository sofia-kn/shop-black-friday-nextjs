import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./components/header/Header";
import Footer from './components/footer/Footer.tsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Black Shop',
  description: 'You can by here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
          <Header/>
      </nav>
      {children}
      <footer>
          <Footer/>
      </footer>
      </body>
    </html>
  )
}
