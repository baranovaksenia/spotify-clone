import './globals.css'
import Sidebar from '@/components/Sidebar';
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify clone',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
