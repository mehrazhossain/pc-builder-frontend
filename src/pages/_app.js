import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <NextNProgress color="#cd2f82" height={4} />
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}
