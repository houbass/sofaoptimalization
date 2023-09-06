import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

//motion lib
import { motion } from 'framer-motion'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic4 from "@/components/pic/background4_v3.webp";

//COMPONENTS
//import SubmitDemo from '@/components/SubmitDemo'
import SubmitdemoV2 from '@/components/SubmitdemoV2'


const inter = Inter({ subsets: ['latin'] })

const Demo = () => {

    return(
        <>
        <Head>
            <title>Sofa Lofi demo submission</title>
            <meta name="description" content="submit your music to label consideration" key="desc"/>
            
            <meta
            property="og:description"
            content="submit your music to label consideration"
            />

            <meta name="twitter:card" content="summary" />
            <meta
            property="og:title"
            content="Sofa Lofi demo submission" 
            />

            <meta
            property="og:image"
            content="background.webp"
            />

            <meta
            property="og:image:type"
            content="image/webp"
            />

            <meta
            property="og:image:width"
            content="500"
            />
            <meta
            property="og:image:height"
            content="500"
            />

            <meta name="author" content="Ondrej Laube" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />


            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

        </Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XQWVQB598P" />
        <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XQWVQB598P');
            `}
        </Script>  


        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            minHeight: "1400px",
            //backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
        }}>

<div 
        className='maincardsAnimation4 imgmargin' 
        style={{
          //marginTop: "70px",
          maxWidth: "1000px",  
          width: "100%",
          position: "absolute",
          top: "0",
          zIndex: "0",
          
        }}>
          <Image 
          className='submitImg' 
          style={{
            //width: "1000px",
            height: "1153px"
          }}
        src={backgroundPic4}
        placeholder='blur'>
          </Image>

        </div>


        <div 
        style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            width: "100%",
            maxWidth: "1000px",
            //background: "rgba(20,20, 20, 1)",
            
            border: "solid 20px transparent",
            borderImage: `url(${backgroundPic2.src}) 20 round`,
            borderBottomStyle: "none",
            borderTopStyle: "none",
            zIndex: "1",
        }}>
        <main 
        style={{
            color: "white",
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }} 
        className={`${inter.className}`}
        >
            <motion.div 
                animate={{
                    opacity: [0, 1]
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
            <SubmitdemoV2 />
            </motion.div>
            </main>
        </div>
        </div>
        </>
    )
}

export default Demo;