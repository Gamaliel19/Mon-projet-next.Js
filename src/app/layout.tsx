'use client'

import 'swiper/swiper-bundle.css'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>My Best Shop</title>
        <meta title="Description" content='Faire vos achats en ligne'></meta>
        <link
          rel="icont"
          type='image/png'
          sizes='32x32'
          href=""
        />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider></body>
    </html>
  )
}
