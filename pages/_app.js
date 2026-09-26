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
    // Global error handler for navigation issues
    const handleError = (event) => {
      if (event.error && event.error.message && event.error.message.includes('dispatchEvent')) {
        console.warn('Navigation error caught and prevented:', event.error);
        event.preventDefault();
        return false;
      }
    };

    // Handle unhandled promise rejections (common with navigation)
    const handleUnhandledRejection = (event) => {
      if (event.reason && event.reason.message && event.reason.message.includes('dispatchEvent')) {
        console.warn('Navigation promise rejection caught:', event.reason);
        event.preventDefault();
        return false;
      }
    };

    // Add global error listeners
    if (typeof window !== 'undefined') {
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <>
        <Head>
          <title>Afrolink</title>
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
