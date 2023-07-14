import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link";
import { Inter } from 'next/font/google'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'


//LOTTIE LIB
import Lottie, {LottieRefCurrentProps} from "lottie-react";


//pic 
import backgroundPic2 from "@/components/pic/background2.svg"


const inter = Inter({ subsets: ['latin'] })

const Topic4 = ({ topic4Animation, mobile }) => {

    //ref
    const animationRef = useRef()
  
    //MOBILE LOGIC
    useEffect(() => {
      const animationId = {id: null}

      function animation() {
        animationId.id = window.requestAnimationFrame(animation);

        if(mobile === true) {
          animationRef.current.stop();
        }else{
          animationRef.current.play();
        }
        

      }
      animation();

      return () => {
        cancelAnimationFrame(animationId.id);
      }
    })

    return(
        <>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            marginTop: "80px",
            opacity: "1",
            //filter: blur,
            transition: "2s ease-in"
          }}>
            <div
            style={{
              //marginTop: "500px",
              //left: "0",
              width: "90%",
              backgroundImage: `url(${backgroundPic2.src})`,
              borderRadius: "20px 0px 0px 20px",
              transition: "0.5s ease-in"
            }}>

              <div 
              style={{
                display: "flex", 
                flexDirection: "row", 
                padding: "20px 20px", 
                marginBottom: "10px",
                
              }}>
                <div>
                  <h1 className='big'>Send us your music</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p style={{fontSize: "20px"}}>
                      Are you a Lo-Fi producer? Submit your music to our Spotify playlist or to release on Sofa Lofi Records.
                    </p>
                    <Link href="/submit">
                      <button className="nicebutton mt" >submit</button>
                    </Link>
                  </div>
                </div>

                <div 
                style={{
                  //background: "orange",
                  marginRight: "30px"
                }}>
                  <Lottie 
                  lottieRef={animationRef}
                  style={{width: "300px"}} 
                  animationData={topic4Animation} 
                  />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Topic4;