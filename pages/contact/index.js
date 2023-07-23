import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

//motion lib
import { motion } from 'framer-motion';

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic7 from "@/components/pic/background7_v3.jpg"

//components
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] })

const ContactPage = () => {

    return(
      <>
        <Head>
            <title>Sofa Lofi contact</title>
            <meta name="description" content="Wanna ask something? Send us a message." key="desc"/>
            
            <meta
            property="og:description"
            content="Wanna ask something? Send us a message."
            />
            <meta
            property="og:image"
            content="https://sofalofi.com//_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbackground3_v2.f374276e.jpg&w=3840&q=75"
            />

            <meta name="viewport" content="width=device-width, initial-scale=1" />


            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

        </Head>
      
  

        <div
        className={`${inter.className}`}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            
        }}>

        <div 
        className='maincardsAnimation4 imgmargin' 
        style={{
          marginTop: "70px",
          maxWidth: "1000px",  
          width: "100%",
          position: "absolute",
          zIndex: "0",
          //backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
        }}>
          <Image 
          className='submitImg'
          style={{
            height: "1400px"
          }}
        src={backgroundPic7}>
          </Image>

        </div>


        <div 
        style={{
            minHeight: "1470px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            width: "100%",
            maxWidth: "1000px",
            //background: "rgba(20,20, 20, 1)",
            //backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
            border: "solid 20px transparent",
            borderImage: `url(${backgroundPic2.src}) 20 round`,
            borderBottomStyle: "none",
            borderTopStyle: "none",
            zIndex: "1",
        }}>
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
            width: "100%",

            paddingTop: "100px",
            //background: "orange"
        }}
        >      
            <Contact />
        </motion.div> 

        </div> 
        </div> 
        </>
    )
}

export default ContactPage;