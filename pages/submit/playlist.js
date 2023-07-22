import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

//motion lib
import { motion } from 'framer-motion'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic4 from "@/components/pic/background4_v2.jpg"

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
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            minHeight: "1500px"
        }}>

<       div 
        //className='maincardsAnimation2 imgmargin' 
        style={{
          //marginTop: "70px",
          maxWidth: "1280px",  
          width: "100%",
          position: "absolute",
          zIndex: "0",
          filter: "blur(5px)"
        }}>
          <Image 
          className='submitImg'
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
            maxWidth: "1300px",
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
    )
}

export default Playlist;