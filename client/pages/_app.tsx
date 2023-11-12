import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import "../styles/globals.css";
import { store } from "../app/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Quadra FE Test</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
