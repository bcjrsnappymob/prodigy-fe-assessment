import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar';
import Store from '../stores/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={Store}>
        <Navbar></Navbar>
          <Component {...pageProps} />
        <Footer></Footer>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
