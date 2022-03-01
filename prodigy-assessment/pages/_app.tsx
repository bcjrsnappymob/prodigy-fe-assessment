import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar';

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
