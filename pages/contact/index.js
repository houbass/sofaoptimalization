import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

//motion lib
import { motion } from 'framer-motion';

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";


const inter = Inter({ subsets: ['latin'] })

const Contact = () => {

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
        className={`${inter.className}`}
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
            width: "100%",
            height: "800px",
            //background: "orange"
        }}
        >      
            <div 
            style={{
                marginTop: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <h2>CONTACT PAGE</h2>
                <p>Description</p>
            </div>
        </motion.div> 

        </div> 
        </div> 
    )
}

export default Contact;