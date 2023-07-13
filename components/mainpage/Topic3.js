import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'

import {AnimatePresence, motion } from 'framer-motion'

//LOTTIE LIB
import Lottie, {LottieRefCurrentProps} from "lottie-react";

//LOTTIE DATA
import animationData from "@/components/lottieanimations/workplace.json";

//pic 
import backgroundPic from "@/components/pic/background.svg"
import backgroundPic2 from "@/components/pic/background2.svg"

const inter = Inter({ subsets: ['latin'] })

const Topic3 = ({ topic3Opacity }) => {

    return(
        <>
          <div
          style={{
            //marginTop: "500px",
            //left: "0",
            width: "90%",
            backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "0 20px 20px 0",
            marginTop: "80px",
            opacity: topic3Opacity,
            //transition: "0.2s ease-in"
          }}>

            <div style={{display: "flex", flexDirection: "row", padding: "20px 20px", marginBottom: "10px"}}>
              <div 
                style={{
                  //background: "orange",
                  marginRight: "30px"
                }}>
                  <Lottie style={{width: "300px"}}  animationData={animationData} />
              </div>

              <div>
                <h1 className='big'>Let's try Sofa workplace</h1>
                <div style={{maxWidth: "600px"}}>     
                  <p style={{fontSize: "20px"}}>This feature will help you to work and listen music on one place.
                  </p>
                  <Link href="/workplace">
                    <button className="nicebutton mt" >try it now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div 
              style={{
                display: "flex", 
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}>
            </div>            
          </div>
        </>
    )
}

export default Topic3;