import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

//motion lib
import { motion } from 'framer-motion'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic4 from "@/components/pic/background4_v3.webp";

//components
import Playlistsubmit from '@/components/Playlistsubmit'


const inter = Inter({ subsets: ['latin'] })


const Playlist = () => {

    //pageref
    const pageRef = useRef();

    //const height = window.innerHeight;
    const [height, setHeight] = useState(0);


    //resize fun
    function resizeFun() {
        if(window.innerHeight > (pageRef.current.offsetTop + pageRef.current.offsetHeight)){
            setHeight(window.innerHeight);
        }else{
            setHeight(pageRef.current.offsetTop + pageRef.current.offsetHeight)
        }

        console.log("resizing")
    }

    //set height for frame
    useEffect(() => {
        resizeFun();
        window.addEventListener("resize", resizeFun);

        return () => {
            window.removeEventListener("resize", resizeFun);
        }
    });

    return(
        <>
        <Head>
            <title>Sofa Lofi playlist submission</title>
            <meta name="description" content="submit your music to our Spotify playlist" key="desc"/>
            
            <meta
            property="og:description"
            content="submit your music to our Spotify playlist"
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
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            minHeight: "1400px"
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
                src={backgroundPic4}>
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
                ref={pageRef} 
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
            <Playlistsubmit />
            </motion.div>
        </main>
        </div>
        </div>
        </>
    )
}

export default Playlist;