import { useContext, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image';

//LOTTIE DATA
import topic4animationData from "@/components/lottieanimations/production.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"
import backgroundPic3 from "@/components/pic/background3.jpg"

//mainpage components
import Topic1 from '@/components/mainpage/Topic1'
import Topic2 from '@/components/mainpage/Topic2'
import Topic3 from '@/components/mainpage/Topic3'
import Topic4 from '@/components/mainpage/Topic4'
import Footer from '@/components/mainpage/Footer'
import { auth } from '@/config/firebase';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //PASSING GLOBAL SETTINGS
  const { mobile } = useContext(GlobalStates);

  //MAIN PAGE
  const mainRef = useRef(null);

  //SETTINGS
  const maxWidth = 1300;

  //TOPICs STATES
  const [topic4Animation, setTopic4Animation] = useState(topic4animationData);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sofa Lofi page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

      </Head>

    <div>
      <main 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "-5",
        //backgroundImage: `url(${backgroundPic2.src})`
        backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
        
      }} 
      className={`${inter.className} `}>

<div 
        className='maincardsAnimation' 
        style={{
          //marginTop: "70px",
          maxWidth: "1300px",  
          width: "100%",
          position: "fixed",
          zIndex: "0",
          
        }}>
          <Image         style={{
width: "100%",
          height: "auto"
          }} src={backgroundPic3}>
          </Image>
        </div>

        <div 
        ref={mainRef}
        style={{
          display: "flex",
          flexDirection: "column",
          
          color: "white",
          maxWidth: `${maxWidth}px`,
          //background: "rgba(20,20, 20, 1)",
          //backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
          border: "solid 20px transparent",
          borderImage: `url(${backgroundPic2.src}) 20 round`,
          borderBottomStyle: "none",
          borderTopStyle: "none",
          zIndex: "1",

        }}>


        <div 
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}> 


        <div className='welcometext'>
          <svg 
          className='welcomesvg'
          xmlns="http://www.w3.org/2000/svg" 
          width="500" 
          height="120" 
          viewBox="-20 -55 500 100"
          >
              <text 
              className='textPath'
              x="11" 
              y="41"
              >Welcome</text>
            </svg>
            <p 
            className='sofalofiAnim'
              > to Sofa Lofi</p>
          </div>
          </div>

          <div
          style={{
            height: "100vw",
            maxHeight: "1100px"
          }}>

          </div>

          <Topic1 />
          <Topic2 />

          <Topic3 />

          <Topic4 
            topic4Animation={topic4Animation} 
            mobile={mobile} 
          />

          <Footer />

        </div>

      </main>
      </div>
    </>
  )
}
