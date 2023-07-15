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

  //console.log(pageyoffset);
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
