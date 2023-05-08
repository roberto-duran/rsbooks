import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import AuthHeader from './components/AuthHeader'
import AuthFooter from './components/AuthFooter'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: 'RS-Store',
    template: '%s | RS-Store'
  },
  description:
    'Envíos gratis en millones de productos. Consigue lo mejor en compras. Disfruta de precios bajos y grandes ofertas en la mayor selección de artículos básicos para el día a día y otros productos, incluyendo moda, hogar, belleza, electrónica, dispositivos, artículos deportivos, juguetes, mascotas, bebé, videojuegos, material de oficina y mucho más.',
  openGraph: {
    title: 'RS-Store',
    description:
      'Envíos gratis en millones de productos. Consigue lo mejor en compras. Disfruta de precios bajos y grandes ofertas en la mayor selección de artículos básicos para el día a día y otros productos, incluyendo moda, hogar, belleza, electrónica, dispositivos, artículos deportivos, juguetes, mascotas, bebé, videojuegos, material de oficina y mucho más.',
    url: 'https://www.rssolutions.com.co/',
    siteName: 'RS-Store',
    locale: 'es-CO',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'RS-Store',
    card: 'summary_large_image'
  },
  icons: {
    shortcut: '/favicon.ico'
  },
  verification: {
    google: 'TODO',
    yandex: 'TODO'
  }
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/')
  }
  return (
    <html lang='en' className={inter.className}>
      <body>
        <AuthHeader />
        <main className='mx-auto flex justify-center h-[82.7vh] -mt-20'>
          <div
            className='flex flex-col w-1/2 md:w-[500px] bg-white h-fit
            shadow-amber-100 text-gray-800 p-6 rounded-md space-y-6'
          >
            {children}
          </div>
        </main>
        <AuthFooter />
      </body>
    </html>
  )
}
