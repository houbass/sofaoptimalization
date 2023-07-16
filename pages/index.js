import { useContext, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'

//LOTTIE DATA
import topic1animationData from "@/components/lottieanimations/sofa.json";
import topic2animationData from "@/components/lottieanimations/music.json";
import topic3animationData from "@/components/lottieanimations/workplace.json";
import topic4animationData from "@/components/lottieanimations/production.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//pic 
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
  const { mobile } = useContext(GlobalStates);

  //MAIN PAGE
  const mainRef = useRef(null);

  //SETTINGS
  const maxWidth = 1300;

  //TOPICs STATES
  const [topic1Animation, setTopic1Animation] = useState(null);
  const [topic2Animation, setTopic2Animation] = useState(null);
  const [topic3Animation, setTopic3Animation] = useState(null);
  const [topic4Animation, setTopic4Animation] = useState(null);

  //RUN SVGs ANIMATION JUST WHEN YOU SCROLL ON IT
  function scrollFun() {

    const windowHeight = window.innerHeight;
    const getscrollY = window.scrollY;
    const constant = 200;

    //TOPIC 1
    const topic1Y = topic1Ref.current.offsetTop;
    const topic1Height = topic1Ref.current.offsetHeight;
    if((windowHeight + getscrollY) > (topic1Y)){
      setTopic1Animation(topic1animationData);
    }
    if((windowHeight + getscrollY) > (topic1Y) && (getscrollY) > (topic1Y + topic1Height - 100)){
      setTopic1Animation(null);
    }

    //TOPIC 2
    const topic2Y = topic2Ref.current.offsetTop;
    const topic2Height = topic2Ref.current.offsetHeight;
    if((windowHeight + getscrollY) > (topic2Y + constant)){
      setTopic2Animation(topic2animationData);
    }
    if((windowHeight + getscrollY) < (topic2Y + constant) ){
      setTopic2Animation(null);
    }
    if((windowHeight + getscrollY) > (topic2Y + constant) && (getscrollY) > (topic2Y + topic2Height - 400)){
      setTopic2Animation(null);
    }

    //TOPIC 3
    const topic3Y = topic3Ref.current.offsetTop;
    const topic3Height = topic3Ref.current.offsetHeight;
    if((windowHeight + getscrollY) > (topic3Y + constant)){
      setTopic3Animation(topic3animationData);
    }
    if((windowHeight + getscrollY) < (topic3Y + constant) ){
      setTopic3Animation(null);
    }
    if((windowHeight + getscrollY) > (topic3Y + constant) && (getscrollY) > (topic3Y + topic3Height - 200)){
      setTopic3Animation(null);
    }

    //TOPIC 4 
    const topic4Y = topic4Ref.current.offsetTop;
    if((windowHeight + getscrollY) > (topic4Y + constant)){
      setTopic4Animation(topic4animationData);
    }
    if((windowHeight + getscrollY) < (topic4Y + constant) ){
      setTopic4Animation(null);
    }
  }

  //scroll listener
  useEffect(() => {
    scrollFun();
    window.addEventListener("scroll", scrollFun);

    return () => {
      window.removeEventListener("scroll", scrollFun);
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

          <div
          ref={topic1Ref}
          >
            <Topic1 
              topic1Animation={topic1Animation} 
              mobile={mobile}
            />
          </div>

          <div
          ref={topic2Ref}
          >
          <Topic2 
            topic2Animation={topic2Animation} 
            mobile={mobile}
          />
          </div>

          <div
          ref={topic3Ref}
          >
            <Topic3 
              topic3Animation={topic3Animation} 
              mobile={mobile} 
            />
          </div>

          <div
          ref={topic4Ref}
          >
            <Topic4 
              topic4Animation={topic4Animation} 
              mobile={mobile} 
            />
          </div>
          <Footer />

        </div>

      </main>
      </div>
    </>
  )
}
