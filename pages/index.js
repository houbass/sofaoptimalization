import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'

import {AnimatePresence, motion } from 'framer-motion'

//LOTTIE DATA
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
  const topic3Ref = useRef();
  const topic4Ref = useRef();

  //PASSING GLOBAL SETTINGS
  const { setMainWidth } = useContext(GlobalStates);

  //MAIN PAGE
  const mainRef = useRef(null);

  //SETTINGS
  const maxWidth = 1300;

  //TOPIC 1 STATES
  const [topic1Width, setTopic1Width] = useState("0");
  const [div1Width, setDiv1Width] = useState(null);
  const [topic1Opacity, setTopic1Opacity] = useState("0");
  const [topic1blur, setTopic1blur] = useState("blur(5px)");

  //TOPIC 2 STATES
  const [topic2Width, setTopic2Width] = useState("90%");
  const [topic2Opacity, setTopic2Opacity] = useState("0");
  const [topic2blur, setTopic2blur] = useState("blur(5px)");

  //TOPIC 3 STATES
  const [topic3Width, setTopic3Width] = useState("90%");
  const [topic3Opacity, setTopic3Opacity] = useState("0");
  const [topic3Animation, setTopic3Animation] = useState(null);

  //TOPIC 4 STATES
  const [topic4Animation, setTopic4Animation] = useState(null);
  
  //SCROLLING STATES
  const [pageyoffset, setPageyoffset] = useState(null);

  //SCROLL FUNCTION
  const onScroll = (e) => {
    setPageyoffset(pageYOffset);
  }

  //ADD ONSCROLL EVENT LISTENER
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return() => {
      window.removeEventListener("scroll", onScroll)
    }
  }, []);


  //ZOBRAZOVANI ANIMACI KDYZ JE POTREBA
  function scrollFun() {

    const windowHeight = window.innerHeight;
    const getscrollY = window.scrollY;
    const constant = 200;

    //TOPIC 3
    const topic3Y = topic3Ref.current.offsetTop;
    const topic3Height = topic3Ref.current.offsetHeight;

    if((windowHeight + getscrollY) > (topic3Y + constant)){
      console.log("TOPIC 3 IS VISIBLE")
      setTopic3Animation(topic3animationData);
    }
    if((windowHeight + getscrollY) < (topic3Y + constant) ){
      console.log("TOPIC 3 IS HIDDEN")
      setTopic3Animation(null);
    }
    if((windowHeight + getscrollY) > (topic3Y + constant) && (getscrollY) > (topic3Y + topic3Height - 200)){
      console.log("TOPIC 3 IS HIDDEN")
      setTopic3Animation(null);
    }

    //TOPIC 4 
    const topic4Y = topic4Ref.current.offsetTop;

    if((windowHeight + getscrollY) > (topic4Y + constant)){
      console.log("TOPIC 4 IS VISIBLE")
      setTopic4Animation(topic4animationData);
    }
    if((windowHeight + getscrollY) < (topic4Y + constant) ){
      console.log("TOPIC 4 IS HIDDEN")
      setTopic4Animation(null);
    }

    //console.log("WINDOW SCROLL Y: " + window.scrollY);
    //console.log("document bottom: " + (topic3Y + topic3Height - 200));
    //console.log("WINDOW HEIGHT: " + window.innerHeight);
    //console.log("TOPIC 3 Y: " + topic3Ref.current.offsetTop);

  }

  useEffect(() => {
    scrollFun();
    window.addEventListener("scroll", scrollFun);

    return () => {
      window.removeEventListener("scroll", scrollFun);
    }
  }, [])

  //SCROLL LOGIC
  useEffect(() => {
    //opacity range map
    const min = 550;
    const max = 1050;
    const range = max - min;
    const offset = pageyoffset - min;
    const actualOpacity = offset / range;
    
    if(pageyoffset > min){

      if(pageyoffset > min && pageyoffset < max){
        setTopic3Opacity(actualOpacity);
      }
      else{
        setTopic3Opacity("1");
      }
    }
    else{
      setTopic3Opacity("0");
    }
    
  })
  
  //ONLOAD ANIMATION
  useEffect(() => {
    setTopic1Width(`${div1Width}px`);

    setTimeout(() => {
      setTopic1Opacity("1");
      setTopic1blur("blur(0px)");
    }, 500);

    setTimeout(() => {
      setTopic2Opacity("1");
      setTopic2blur("blur(0px)");
    }, 1000);

  }, [div1Width])

  //GET MAIN WIDTH
  useEffect(() => {
    setMainWidth(mainRef.current.offsetWidth + "px");
  })

  //console.log(pageyoffset);
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


          <Topic1 topic1Width={topic1Width} div1Width={div1Width} setDiv1Width={setDiv1Width} topic1Opacity={topic1Opacity} blur={topic1blur}/>
          <Topic2 topic2Width={topic2Width} topic2Opacity={topic2Opacity} blur={topic2blur}/>
          <div
          ref={topic3Ref}
          >
            <Topic3 topic3Animation={topic3Animation} topic3Width={topic3Width} topic3Opacity={topic2Opacity} blur={topic2blur}/>
          </div>

          <div
          ref={topic4Ref}
          >
            <Topic4 topic4Animation={topic4Animation}/>
          </div>
          <Footer />

        </div>

      </main>
      </div>
    </>
  )
}
