import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Footer from '../components/general/footer';
import Navbar from '../components/general/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
        <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default MyApp
