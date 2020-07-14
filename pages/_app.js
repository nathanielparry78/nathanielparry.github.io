import Head from 'next/head'
import Nav from '../components/nav'
import styled from 'styled-components'
import { Component } from 'react'


// const GlobalStyles = createGlobalStyle`
// 	@import url('https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap');
// 	@import url('https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap');

// 	body {

//   }
// `

const GlobalStyles = styled.div`
  font-family: 'News Cycle', sans-serif;
  line-height: 1.4;
  padding: 1rem;
  background: #222;
`

function App({ Component, pageProps }) {
  return (

    <>
      <GlobalStyles>
      <Head>
        <title>SYM REF</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer+SC&family=News+Cycle:wght@400;700&display=swap" rel="stylesheet" />

      </Head>

        <Nav />
        <Component {...pageProps} />
      </GlobalStyles>
              {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js"></script>
{/*
        <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#available-libraries --> */}

        <script>
          // Your web app's Firebase configuration
          var firebaseConfig = {
            apiKey: "AIzaSyClOxNUeMGRedsu8arzoq3JOZ-DSFdrQvg",
            authDomain: "sym-ref.firebaseapp.com",
            databaseURL: "https://sym-ref.firebaseio.com",
            projectId: "sym-ref",
            storageBucket: "sym-ref.appspot.com",
            messagingSenderId: "123701362737",
            appId: "1:123701362737:web:f29964a74ba4fe111e5510"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        </script>
    </>

  )
}

export default App;
