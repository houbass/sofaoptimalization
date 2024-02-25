import { useEffect, useState } from 'react';
import Head from 'next/head';

//styl  
import '@/styles/globals.css';

//local storage hook
import useLocalStorageState from 'use-local-storage-state';

//GLOBALSTATES
import { GlobalStatesProvider } from '@/globalstates/GlobalStates';

//components
import { apiKeys } from '@/config/apiKeys';
import Navbar from '@/components/Navbar';
import Spotifyplayer from '@/components/Spotifyplayer';
import LoadingPage from '@/components/LoadingPage';
import Coockies from '@/components/Coockies';

export default function App({ Component, pageProps }) {

  // STATES FOR COOCKIES SETTING
  const [askedForCoockies, setAskedForCoockies] = useLocalStorageState('askedForCoockies', {defaultValue: false });
  const [coockiesAccepted, setCoockiesAccepted] = useLocalStorageState('coockiesAccepted', {defaultValue: false });

  // LOAD GOOGLE ANALYTICS
  function loadGoogleAnalytics() {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${apiKeys.gaId}`;
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];

    function gtag(){
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', `${apiKeys.gaId}`, {
      page_path: window.location.pathname
    })
  }

  // CHECK IF USER AGREE WITH COOCKIES
  useEffect(() => {
    if(coockiesAccepted === true && askedForCoockies === true) {
      loadGoogleAnalytics();
    }
  }, [coockiesAccepted])
  

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <GlobalStatesProvider>
        <LoadingPage/>
        <Navbar />
        <Component {...pageProps} />

        {coockiesAccepted === true && askedForCoockies === true ? <Spotifyplayer /> : null}

        <Coockies 
        askedForCoockies={askedForCoockies} 
        setAskedForCoockies={setAskedForCoockies}
        setCoockiesAccepted={setCoockiesAccepted}
        />

      </GlobalStatesProvider>

    </>
  )
}
