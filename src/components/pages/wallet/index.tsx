import Tabs, { Tab } from "@/components/tabs";
import Wallet from "@/components/wallet";
import { WithRouterProps } from "next/dist/client/with-router";
import Head from "next/head";
import React from "react";

interface PageProps extends WithRouterProps {}

const WalletPage: React.FC<PageProps> = ({ router }) => {
  return (
    <>
      <Head>
        <title>1SatOrdinals.com</title>
        <meta
          name="description"
          content="An Ordinals-compatible implementation on Bitcoin SV"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Tabs currentTab={Tab.Wallet} />
      <Wallet />
    </>
  );
};

export default WalletPage;
