import Head from 'next/head';
import "@/styles/globals.css";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from "@/components/Layout";
import { useEffect } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

function AppWrapper({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    // Last-resort safety net: a known mobile-browser race condition can
    // throw "Cannot read properties of null (reading 'dispatchEvent')"
    // inside history.pushState during route teardown. Swallow ONLY that
    // exact error so real errors still surface.
    const isDispatchEventError = (err) =>
      typeof err?.message === 'string' &&
      err.message.includes('dispatchEvent') &&
      err.message.includes('null');

    const handleError = (event) => {
      if (isDispatchEventError(event.error)) {
        console.warn('Suppressed known navigation race error:', event.error);
        event.preventDefault();
      }
    };

    const handleUnhandledRejection = (event) => {
      if (isDispatchEventError(event.reason)) {
        console.warn('Suppressed known navigation race rejection:', event.reason);
        event.preventDefault();
      }
    };

    try {
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);
      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    } catch {
      return undefined;
    }
  }, []);

  return (
    <ThemeProvider>
      <>
        <Head>
          <title>Afrolink</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="application-name" content="Afrolink" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={`${poppins.variable} ${poppins.className}`} suppressHydrationWarning>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </>
    </ThemeProvider>
  );
}

export default function App({ Component, pageProps }) {
  return <AppWrapper Component={Component} pageProps={pageProps} />;
}
