import Head from 'next/head';
import '../styles/globals.css';
import initAuth from '../lib/initAuth';

initAuth();

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <Head>
                <title>Box Spots</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
}