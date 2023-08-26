/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import './global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
