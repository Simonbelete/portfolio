import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TrackerProvider } from "provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TrackerProvider>
      <Component {...pageProps} />
    </TrackerProvider>
  );
}
export default MyApp;
