import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProps } from 'next/app';
import '../App.css';

interface PageProps {

}

export default function App({ Component, pageProps }: AppProps<PageProps> ) {
  return <Component {...pageProps} />
}