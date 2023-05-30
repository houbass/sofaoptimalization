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

//components
import Releases from '@/components/Releases';


const inter = Inter({ subsets: ['latin'] })

const ReleasesPage = () => {

    //fettching from database here
    const [myData, setMyData] = useState([]);

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

    //update data list
    useEffect(() => {
        getData();
    }, []);



    return(
        <main className={`${styles.main} ${inter.className}`}>

            <motion.div 
                className={styles.center} 
                animate={{
                    opacity: [0, 1]
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                >
                    
                    <h2>RELEASES PAGE</h2>
                <div className={styles.description}>
                    <p>Latest Sofa Lofi releases</p>
                </div>

                <Releases />

            </motion.div>
            <br/><br/><br/><br/><br/><br/><br/>
        </main>
    )
}

export default ReleasesPage;