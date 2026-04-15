import Head from 'next/head';
import "@/styles/globals.css";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Head>
          <title>Afrolink</title>
          <meta name="application-name" content="Afrolink" />
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
