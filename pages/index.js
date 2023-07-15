import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'

import {AnimatePresence, motion } from 'framer-motion'

//LOTTIE DATA
import topic1animationData from "@/components/lottieanimations/sofa.json";
import topic2animationData from "@/components/lottieanimations/music.json";
import topic3animationData from "@/components/lottieanimations/workplace.json";
import topic4animationData from "@/components/lottieanimations/production.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//pic 
import backgroundPic from "@/components/pic/background.svg"
import backgroundPic2 from "@/components/pic/background2.svg"


//mainpage components
import Topic1 from '@/components/mainpage/Topic1'
import Topic2 from '@/components/mainpage/Topic2'
import Topic3 from '@/components/mainpage/Topic3'
import Topic4 from '@/components/mainpage/Topic4'
import Footer from '@/components/mainpage/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //refs
  const topic1Ref = useRef();
  const topic2Ref = useRef();
  const topic3Ref = useRef();
  const topic4Ref = useRef();

  //PASSING GLOBAL SETTINGS
  const { setMainWidth, mobile } = useContext(GlobalStates);

  //MAIN PAGE
  const mainRef = useRef(null);

  //SETTINGS
  const maxWidth = 1300;
  const [titleSize, setTitleSize] = useState("70px");

  //TOPIC 1 STATES
  const [topic1Opacity, setTopic1Opacity] = useState("1");
  const [topic1blur, setTopic1blur] = useState("blur(0px)");
  const [topic1Animation, setTopic1Animation] = useState(null);

  //TOPIC 2 STATES
  const [topic2Opacity, setTopic2Opacity] = useState("1");
  const [topic2blur, setTopic2blur] = useState("blur(0px)");
  const [topic2Animation, setTopic2Animation] = useState(null);

  //TOPIC 3 STATES
  const [topic3Animation, setTopic3Animation] = useState(null);

  //TOPIC 4 STATES
  const [topic4Animation, setTopic4Animation] = useState(null);
  



  //WIDTH LESS THEN 850px and 700px
  const [flexStyle1, setFlexStyle] = useState("row");
  const [lottieWidth, setLottieWidth] = useState("300px");
  const [pSize, setPsize] = useState("20px");



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
        background: "rgb(20,20,20)",
        //backgroundImage: `url(${backgroundPic2.src})`
        
      }} 
      className={`${inter.className} `}>


        <br/><br/><br/><br/><br/>
        <input placeholder='write somethink'></input>

        <div 
        ref={mainRef}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          maxWidth: `${maxWidth}px`,
          //background: "rgba(20,20, 20, 1)",
          backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
          border: "solid 20px transparent",
          borderImage: `url(${backgroundPic2.src}) 20 round`,
          borderBottomStyle: "none",
          borderTopStyle: "none",
        }}>

          <div
          ref={topic1Ref}
          >
            <Topic1 
              topic1Opacity={topic1Opacity} 
              topic1Animation={topic1Animation} 
              blur={topic1blur} 
              mobile={mobile}
              titleSize={titleSize}
              flexStyle1={flexStyle1} 
              lottieWidth={lottieWidth} 
              pSize={pSize}
            />
          </div>

          <div
          ref={topic2Ref}
          >
          <Topic2 
            topic2Opacity={topic2Opacity} 
            topic2Animation={topic2Animation} 
            blur={topic2blur} 
            titleSize={titleSize} 
            flexStyle1={flexStyle1}
            lottieWidth={lottieWidth}
            pSize={pSize}
          />
          </div>

          <div
          ref={topic3Ref}
          >
            <Topic3 
              topic3Animation={topic3Animation} 
              topic3Opacity={topic2Opacity} 
              blur={topic2blur} 
              mobile={mobile} 
              titleSize={titleSize} 
              flexStyle1={flexStyle1}
              lottieWidth={lottieWidth}
              pSize={pSize}
            />
          </div>

          <div
          ref={topic4Ref}
          >
            <Topic4 
              topic4Animation={topic4Animation} 
              mobile={mobile} 
              titleSize={titleSize}
              flexStyle1={flexStyle1}
              lottieWidth={lottieWidth}
              pSize={pSize}
            />
          </div>
          <Footer />

        </div>

      </main>
      </div>
    </>
  )
}
