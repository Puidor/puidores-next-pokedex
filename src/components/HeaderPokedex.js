import React from "react";
import Head from "next/head";

export default function HeaderPokedex({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
