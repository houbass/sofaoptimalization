import { useEffect, useState, useContext, useRef } from 'react';

//fonts and styles
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

//motion lib
import { motion } from 'framer-motion'

//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic4 from "@/components/pic/background5_v3.webp";

//components
import Releases from '@/components/Releases';

const inter = Inter({ subsets: ['latin'] })


//SERVER SIDER RENDER (firebase data)
export async function getServerSideProps() {
    const contentCollectionRef = collection(db, "content");

    // Fetch data from external API
    const res = await getDocs(contentCollectionRef);
    const filteredData = res.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id, 
    }));
   
    // Pass data to the page via props
    return { props: { filteredData } }
  }


const ReleasesPage = ({ filteredData }) => {
    console.log(filteredData)

    return(
        <>
            <Head>
            <title>Sofa Lofi releases</title>
            <meta name="description" content="check out our latest lofi releases" key="desc"/>
            
            <meta
            property="og:description"
            content="check out our latest lofi releases"
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
            minHeight: "1550px",
            //background:"orange"
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
            height: "1550px"
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
        
        className={` ${inter.className}`} 
        style={{
            marginTop: "100px",
            width: "100%"
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
                style={{
                    //background: "orange",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <div 
                    className='brush'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "50px",
                        alignItems: "center",
                        //minHeight: "800px",
                        //maxWidth: "680px",
                        //width: "90%",
                        textAlign: "center",
                        background: "orange",
                        padding: "30px 15px",
                        borderRadius: "50px",
                        background: "rgba(20,20,20,0.8)",
                        boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
                        margin: "0px 10px"
                        

                    }}>
                        <h1 
                        style={{
                            paddingBottom: "30px",
                            
                        }}>Latest Sofa Lofi releases</h1>
                        <Releases filteredData={filteredData}/>
                        <div className='brush center mt'>
                            <h2>wanna hear more?</h2>
                            <p>check out Sofa Lofi Releases playlist</p>
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