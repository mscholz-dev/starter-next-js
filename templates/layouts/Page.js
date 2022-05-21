import React from "react";
import Head from "next/head";
import Header from "./Header";

export default function Page({ title, children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>{title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main className="main-wrapper">{children}</main>
    </>
  );
}
