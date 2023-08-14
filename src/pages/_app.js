import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // return getLayout(<Component {...pageProps} />);
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <NextNProgress color="#cd2f82" height={4} />
        {getLayout(<Component {...pageProps} />)}

        <ToastContainer />
      </SessionProvider>
    </Provider>
  );
}
