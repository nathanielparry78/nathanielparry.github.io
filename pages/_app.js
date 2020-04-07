import Head from 'next/head'
import Nav from '../components/nav'

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap');
	@import url('https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap');

	body {
    font-family: 'News Cycle', sans-serif;
		line-height: 1.4;
    padding: 1rem;
    background: #222;
  }
`

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <Head>
        <title>SYM REF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

    <Component {...pageProps} />
    </>
  )
}

export default App;
