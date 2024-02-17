import './globals.css'
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

export const metadata = {
  title: 'Black Shop',
  description: 'You can by here',
}

export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
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
