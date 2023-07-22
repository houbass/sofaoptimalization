import { useEffect, useState, useContext, useRef } from 'react';

//fonts and styles
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

//motion lib
import { motion } from 'framer-motion'

//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"
import backgroundPic4 from "@/components/pic/background5_v2.jpg"

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
        <div
        
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            minHeight: "1750px",
            //background:"orange"
        }}>

        <div 
        className='maincardsAnimation4 imgmargin' 
        style={{
          //marginTop: "70px",
          maxWidth: "1300px",  
          width: "100%",
          position: "absolute",
          top: "0",
          zIndex: "0",
          
        }}>
          <Image 
          className='submitImg' 
          style={{
            height: "1750px"
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
            maxWidth: "1300px",
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
                    className='brush'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "50px",
                        alignItems: "center",
                        //minHeight: "800px",
                    
                        textAlign: "center",
                        background: "orange",
                        padding: "30px",
                        borderRadius: "50px",
                        background: "rgba(20,20,20,0.8)",
                        boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",

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