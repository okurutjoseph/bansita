import { Inter, Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'
import './globals.css'
import ClientLayout from './client-layout'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Bansita',
  description: 'Your fitness journey starts here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={inter.className}>
        <Providers>
          <ClientLayout>
            <div className="flex min-h-screen flex-col pt-[7rem]">
              {children}
            </div>
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
