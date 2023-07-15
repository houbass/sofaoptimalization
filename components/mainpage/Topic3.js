import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

//LOTTIE LIB
import Lottie from "lottie-react";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const inter = Inter({ subsets: ['latin'] })

const Topic3 = ({ topic3Opacity, blur, topic3Animation, mobile, titleSize, flexStyle1, lottieWidth, pSize }) => {

  //ref
  const animationRef = useRef();

  //MOBILE LOGIC
      
  useEffect(() => {
      if(mobile === true) {
        animationRef.current.stop();
      }else{
        animationRef.current.play();
      }
  }, [topic3Animation])


    return(
        <>
          <div
          style={{
            width: "90%",
            backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "0 20px 20px 0",
            marginTop: "80px",
            opacity: topic3Opacity,
            filter: blur,
            transition: "2s ease-in"
          }}>

            <div style={{display: "flex", flexDirection: flexStyle1, padding: "20px 20px", marginBottom: "10px"}}>
              <div 
                style={{
                  marginRight: "30px"
                }}>
                  
                  <Lottie 
                    lottieRef={animationRef} 
                    style={{width: lottieWidth, height: lottieWidth}}  
                    animationData={topic3Animation} 
                  />
              
              </div>

              <div>
                <h1 style={{fontSize: titleSize}}>Lets try Sofa workplace</h1>
                <div style={{maxWidth: "600px"}}>     
                  <p style={{fontSize: pSize}}>This feature will help you to work and listen music on one place.
                  </p>
                  <Link href="/workplace">
                    <button className="nicebutton mt" >try it now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div 
              style={{
                display: "flex", 
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}>
            </div>            
          </div>
        </>
    )
}

export default Topic3;