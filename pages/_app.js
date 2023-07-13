import Head from 'next/head'

//
import '@/styles/globals.css'

//GLOBALSTATES
import { GlobalStatesProvider } from '@/globalstates/GlobalStates'

//components
import Navbar from '@/components/Navbar'
import Spotifyplayer from '@/components/Spotifyplayer'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {

  //MOBILE OR COMPUTER CHECK
  useEffect(() => {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
       console.log("ITS MOBILE")
    } else {
      console.log("ITS COMPUTER")
    }
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sofa Lofi page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>

      <GlobalStatesProvider>
        <Navbar />
        <Component {...pageProps} />
        <Spotifyplayer />
      </GlobalStatesProvider>

    </>
  )
}
