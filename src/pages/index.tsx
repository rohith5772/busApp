import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import HomePage from '@/components/HomePage';
import App from '@/pages/detailbusjourney';

export default function Index() {
  return <HomePage />;
}