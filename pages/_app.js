import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <Head>
                <title>Box Spots</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp
