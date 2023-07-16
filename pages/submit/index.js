import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

//motion lib
import { motion } from 'framer-motion'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

const inter = Inter({ subsets: ['latin'] })

const Submit = () => {

    return(
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            //background: "orange",
            height: "100vh",
            minHeight: "700px",
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
        style={{
            color: "white",
            paddingTop: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
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
                    height: "300px"
                }}
                >
            <div 
            className='submitFlex'
            >
                <Link 
                href="submit/demo"
                className="submissionCard" 
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px"
                }}>

                    <div 
                    style={{
                        backgroundImage: `url(${backgroundPic2.src})`, 
                        width: "240px",
                        height: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px"
                    }}>
                        <p>SUBMIT DEMO</p>
                    </div>
                </Link>

                <Link 
                href="submit/playlist" 
                className="submissionCard"
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px"
                }}>
                    <div 
                    style={{
                        backgroundImage: `url(${backgroundPic2.src})`, 
                        width: "240px",
                        height: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px"
                    }}>
                        <p>SUBMIT TO PLAYLIST</p>
                    </div>
                </Link>


            </div>
            </motion.div>
        </main>
        </div>
        </div>
    )
}

export default Submit;