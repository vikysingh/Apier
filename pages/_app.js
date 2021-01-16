import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

import Head from "next/head";

const titolo = "Apier";
const descrizione = "Un app store per giochi ed app web progressive!";
// const url = "https://apier.netlify.app";
const colore = "#6C63FF";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={colore} />
        <meta name="description" content={descrizione} />
        <meta name="og:title" property="og:title" content={titolo} />
        <meta
          name="og:description"
          property="og:description"
          content={descrizione}
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/icons/favicon-16x16.png"
        />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content={colore} />
        <meta
          name="msapplication-TileImage"
          content="/static/ms-icon-144x144.png"
        />

        <title>Apier</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
