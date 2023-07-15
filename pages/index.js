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

  const [text, setText] = useState("");

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
    const [topic1Width, setTopic1Width] = useState("0");
    const [div1Width, setDiv1Width] = useState(null);
    const [topic1Opacity, setTopic1Opacity] = useState("0");
    const [topic1blur, setTopic1blur] = useState("blur(5px)");
    const [topic1Animation, setTopic1Animation] = useState(null);
  
    //TOPIC 2 STATES
    const [topic2Width, setTopic2Width] = useState("90%");
    const [topic2Opacity, setTopic2Opacity] = useState("0");
    const [topic2blur, setTopic2blur] = useState("blur(5px)");
    const [topic2Animation, setTopic2Animation] = useState(null);
  
    //TOPIC 3 STATES
    const [topic3Width, setTopic3Width] = useState("90%");
    const [topic3Animation, setTopic3Animation] = useState(null);
  
    //TOPIC 4 STATES
    const [topic4Animation, setTopic4Animation] = useState(null);

  //ZOBRAZOVANI ANIMACI KDYZ JE POTREBA
  function scrollFun() {

    const windowHeight = window.innerHeight;
    const getscrollY = window.scrollY;
    const constant = 200;


  }

  //WIDTH LESS THEN 850px and 700px
  const [flexStyle1, setFlexStyle] = useState("row");
  const [lottieWidth, setLottieWidth] = useState("300px");
  const [pSize, setPsize] = useState("20px");

  function resizeFun() {

    //850px <
    if(window.innerWidth < 850 ){
      setTitleSize("50px");

      //700px <
      if(window.innerWidth < 700) {
        setFlexStyle("column");
        setLottieWidth("300px");
        setPsize("20px");

        //450px <
        if(window.innerWidth < 450){
          setTitleSize("35px");
          setLottieWidth("190px");
          setPsize("17px");


          //320px <
          if(window.innerWidth < 320){
            setLottieWidth("150px");
          }

        }



      }else{
        setFlexStyle("row");
        setLottieWidth("300px");
        setPsize("20px");
      }

    }
    if(window.innerWidth > 850 ){
      setTitleSize("70px");
    }

    console.log(window.innerWidth)
  }

  //resize listener
  useEffect(() => {
    resizeFun();
    window.addEventListener("resize", resizeFun);

    return () => {
      window.removeEventListener("resize", resizeFun);
    }
  }, [])


  //scroll listener
  useEffect(() => {
    scrollFun();
    window.addEventListener("scroll", scrollFun);

    return () => {
      window.removeEventListener("scroll", scrollFun);
    }
  }, [])


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



  return (
    <>
  <div>
    <br/><br/><br/><br/><br/><br/>
    <h1 className='big'>Check</h1>
    <input 
    placeholder='write some shit' 
    onChange={(e) => {setText(e.target.value)}}
    ></input>
    <p>{text}</p>
  </div>
    </>
  )
}
