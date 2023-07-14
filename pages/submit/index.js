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
                ref={pageRef} 
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
            style={{
                //background: "orange",
                display: "flex",
                flexDirection: "row",
                gap: "40px"
            }}>
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
                        width: "250px",
                        height: "200px",
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
                        width: "250px",
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px"
                    }}>
                        <p>SUBMIT PLAYLIST</p>
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