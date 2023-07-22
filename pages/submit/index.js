import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

//motion lib
import { motion } from 'framer-motion'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic4 from "@/components/pic/background4_v2.jpg"

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
            minHeight: "1500px",
        }}>

        <div 
        className='maincardsAnimation4 imgmargin' 
        style={{
          //marginTop: "70px",
          maxWidth: "1300px",  
          width: "100%",
          position: "absolute",
          zIndex: "0",
          backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
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
                    className='brush submithover'
                    style={{
                        //backgroundImage: `url(${backgroundPic2.src})`,
                        background: "rgba(20,20,20,0.8)", 
                        width: "270px",
                        height: "270px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px",
                        boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
                    }}>
                        <h2>SUBMIT DEMO</h2>
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
                    className='brush submithover'
                    style={{
                        //backgroundImage: `url(${backgroundPic2.src})`, 
                        background: "rgba(20,20,20,0.8)",
                        width: "270px",
                        height: "270px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px",
                        boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
                    }}>
                        <h2>SUBMIT TO PLAYLIST</h2>
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