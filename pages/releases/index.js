import { useEffect, useState, useContext } from 'react';

//fonts and styles
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

//motion lib
import {AnimatePresence, motion } from 'framer-motion'

//pic 
import backgroundPic from "@/components/pic/background.svg"
import backgroundPic2 from "@/components/pic/background2.svg"

//components
import Releases from '@/components/Releases';


const inter = Inter({ subsets: ['latin'] })

const ReleasesPage = () => {

    //fettching from database here
    const [myData, setMyData] = useState([]);

    //const height = window.innerHeight;
    const [height, setHeight] = useState(0);

        //data z databaze
    const contentCollectionRef = collection(db, "content");
    const getData = async () => {
    try {
      const data = await getDocs(contentCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));
      setMyData(filteredData);

    } catch (err) {
      console.error(err);
    }
    };

    //update when load
    useEffect(() => {
        setHeight(window.innerHeight);
        getData();
    }, []);



    return(
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        }}>


        <div 
        style={{
            height: height,
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
            <br/><br/><br/><br/><br/><br/><br/>
        </main>
        </div>
        </div>
    )
}

export default ReleasesPage;