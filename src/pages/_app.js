import Head from "next/head";
import "../styles/globals.css";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Quebratech</title>
        <link rel="icon" href="./icon.jpg" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
