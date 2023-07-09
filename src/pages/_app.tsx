import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ReactGA from 'react-ga';
import Footer from '@/components/Footer/footer';
import { ChakraProvider, theme } from '@chakra-ui/react'

ReactGA.initialize('G-9WKDGYYKZB');
export default function App({ Component, pageProps }: AppProps) {
  return (<ChakraProvider theme={theme}><Component {...pageProps} />{/*<Footer />*/}</ChakraProvider>)
}
