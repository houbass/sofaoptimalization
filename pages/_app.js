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
