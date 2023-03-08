import './globals.css'

export const metadata = {
  title: 'AP-Social',
  description: 'Login',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
