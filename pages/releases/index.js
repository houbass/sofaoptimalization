import { useEffect, useState, useContext, useRef } from 'react';

//fonts and styles
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//motion lib
import { motion } from 'framer-motion'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

//components
import Releases from '@/components/Releases';

const inter = Inter({ subsets: ['latin'] })

const ReleasesPage = () => {

    return(
        <>
        <div
        
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            minHeight: "1650px",
            //background:"orange"
        }}>

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
            backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
            border: "solid 20px transparent",
            borderImage: `url(${backgroundPic2.src}) 20 round`,
            borderBottomStyle: "none",
            borderTopStyle: "none",
        }}>

        <main 
        
        className={` ${inter.className}`} 
        style={{
            marginTop: "100px"
        }}
        >

            <motion.div 
                animate={{
                    opacity: [0, 1]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
                >
                    <div 
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "50px",
                        alignItems: "center",
                        minHeight: "800px",
                        paddingBottom: "100px",
                        textAlign: "center"
                    }}>
                        <h1 
                        style={{
                            paddingBottom: "60px"
                        }}>Latest Sofa Lofi releases</h1>
                        <Releases />
                        <div className='center'>
                            <h2>wanna hear more?</h2>
                            <p style={{fontSize: "12px"}}>check out Sofa Lofi Releases playlist</p>
                            <a href="https://open.spotify.com/playlist/6xYInAFbEiRecBuFYqXvK7?si=6ed439a031744eed" target="_blank">
                                <button className="nicebutton mt" >listen to it now</button>
                            </a>
                        </div>

                    </div>
            </motion.div>
        </main>
        </div>
        </div>
        </>
    )
}

export default ReleasesPage;