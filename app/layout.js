import '../styles/globals.css'
import Navbar from './navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>)
}