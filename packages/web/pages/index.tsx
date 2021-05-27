import * as React from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Landing page of livefeed</title>
      </Head>
      <header>Header</header>
      <main>Landing page</main>
      <footer>Footer</footer>
    </>
  );
}
