import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Home.module.css';

//MOTION LIB
import {AnimatePresence, motion } from 'framer-motion';

//LOTTIE LIB
import Lottie, { LottieRefCurrentProps} from "lottie-react";

//pic 
import backgroundPic from "@/components/pic/background.svg";
import backgroundPic2 from "@/components/pic/background2.svg";
import { render } from 'react-dom';

const inter = Inter({ subsets: ['latin'] })

const Topic1 = ({ setDiv1Width, topic1Opacity, topic1Animation, mobile, blur, titleSize, flexStyle1, lottieWidth, pSize }) => {

  const divRef = useRef(null);
  const div1y = divRef.current?.offsetTop;
  const [div1Height, setDiv1Height] = useState(null);

  //animation ref
  const animationRef = useRef();

  //WRAPPER RESIZE
  const resizeFun = () => {
    setDiv1Height(divRef.current?.offsetHeight);
    setDiv1Width(divRef.current?.offsetWidth);

  }

  useEffect(() => {
    setDiv1Height(divRef.current?.offsetHeight);
    setDiv1Width(divRef.current?.offsetWidth);
    window.addEventListener("resize", resizeFun);

    return() => {
      window.removeEventListener("resize", resizeFun);
    }

  }, [div1y])

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
          <div className='check'
          
          style={{
            //width: topic1Width, 
            width: "90%",
            //height: div1Height, 
            //background: "orange",
            //position: "absolute",
            //top: `${div1y}px`,
            borderRadius: "0 20px 20px 0",
            backgroundImage: `url(${backgroundPic2.src})`,
            //zIndex: "0",
            //transition: "0.5s ease-in",
            opacity: topic1Opacity,
            transition: "1s ease-in", 
            //background: "orange",
            filter: blur,
            
          }}>
          
          <div
          ref={divRef}
          style={{
            //marginTop: "500px",
            //left: "0",
            //width: topic1Width,
            //backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "0 20px 20px 0",
            marginTop: "100px",
            //transition: "0.5s ease-in",
            //height: "100px"
            //background: "orange",
            width: "90%"
            
          }}>

            <div 
            style={{
              display: "flex", 
              flexDirection: flexStyle1, 
              padding: "20px 20px", 
              marginBottom: "10px",


            }}>
              <div 
              style={{
                //background: "orange",
                opacity: topic1Opacity,
                transition: "1s ease-in",
                //position: "absolute",
                top: `${div1y}px`,
                
              }}>
                <Lottie 
                  lottieRef={animationRef} 
                  style={{width: lottieWidth}} 
                  animationData={topic1Animation} 
                />
              </div>

              <div 
              style={{

                //marginLeft: "330px"

              }}>
                <h1 style={{fontSize: titleSize}}>Welcome to Sofa Lofi</h1>
                <div style={{maxWidth: "600px"}}>     
                  <p style={{fontSize: pSize}}>We are a music label with taste for lofi hip hop, focusing to help you 
                    to study work or chill, just try to hit the play button bellow and dive into the vibe...
                  </p>
                  <a href="https://open.spotify.com/playlist/6so9XlkasaOqQFNghgzUX5?si=9d0511d634164493" target="_blank">
                    <button className="nicebutton mt" >listen to it now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default Topic1;