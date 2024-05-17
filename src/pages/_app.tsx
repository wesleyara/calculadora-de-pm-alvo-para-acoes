import "~/styles/globals.scss";
import "~/styles/typography.scss";

import "@fontsource/barlow";
import '@fontsource-variable/inter';

import type { AppProps } from "next/app";
import { Toaster } from "~/components/ui/toaster";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
