import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ReactGA from 'react-ga';
import Footer from '@/components/Footer/footer';

ReactGA.initialize('376609735');

export default function App({ Component, pageProps }: AppProps) {
  return (<><Component {...pageProps} />{/*<Footer />*/}</>)
}
