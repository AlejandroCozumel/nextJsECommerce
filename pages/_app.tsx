import { AppProps } from "next/app";
import { FC } from "react";

import "@assets/main.css";

const Noop: FC<CompProps> = ({ children }) => <>{children}</>;

type CompProps = {
  children: React.ReactNode;
};

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<CompProps> } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
