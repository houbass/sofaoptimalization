import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

export default function LoadingPage() {

    //PASSING GLOBAL SETTINGS
    const { loadingState, setLoadingState } = useContext(GlobalStates);

    //router
    const router = useRouter();
  
    useEffect(() => {
  
      function handleStart() {
        setLoadingState("visible");
      }
      function handleComplete() {
        setLoadingState("hidden");
      }
  
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
  
      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);      
      }
  
  
    }, [router]);

    return (
        <>
            <div 
            className='loadingPage'
            style={{
                visibility: loadingState
            }}>

                <div className='loaderBox'>
                    <div className='loader1'></div>
                    <div className='loader2'></div>
                    <div className='loader1'></div>
                </div>
            </div>
        </>
    )
  
  }