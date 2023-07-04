import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ReactGA from 'react-ga';
import Footer from '@/components/Footer/footer';
import TagManager from 'react-gtm-module';
const tagManagerArgs = {

  gtmId:'G-9WKDGYYKZB'
}
ReactGA.initialize('G-9WKDGYYKZB');
TagManager.initialize(tagManagerArgs);
export default function App({ Component, pageProps }: AppProps) {
  return (<><Component {...pageProps} />{/*<Footer />*/}</>)
}
