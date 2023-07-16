import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

//LOTTIE LIB
import Lottie from "lottie-react";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const inter = Inter({ subsets: ['latin'] })

const Topic3 = ({ topic3Animation, mobile }) => {

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
          className='maincardsAnimation2'
          style={{
            width: "90%",
            backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "0 20px 20px 0",
            marginTop: "80px",
          }}>

            <div className='mainpageCards'>
              <div 
                style={{
                  marginRight: "30px"
                }}>
                  
                  <Lottie 
                    lottieRef={animationRef} 
                    className="lottieSize" 
                    animationData={topic3Animation} 
                  />
              
              </div>

              <div>
                <h1 className='mainpageTitles'>Lets try Sofa workplace</h1>
                <div style={{maxWidth: "600px"}}>     
                  <p className="mainpageP">This feature will help you to work and listen music on one place.
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