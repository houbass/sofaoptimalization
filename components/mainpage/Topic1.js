import { Inter } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

//LOTTIE LIB
import Lottie from "lottie-react";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

const inter = Inter({ subsets: ['latin'] })

const Topic1 = ({  topic1Opacity, topic1Animation, mobile, blur, titleSize, flexStyle1, lottieWidth, pSize }) => {

  const divRef = useRef(null);

  //animation ref
  const animationRef = useRef();

      
  useEffect(() => {
    if(mobile === true) {
      animationRef.current.stop();
    }else{
      animationRef.current.play();
    }
  }, [topic1Animation])

      

    return(
        <>
          <div className='check'
          ref={divRef}
          style={{
            width: "90%",
            background: "orange",
            borderRadius: "0 20px 20px 0",
            backgroundImage: `url(${backgroundPic2.src})`,
            opacity: topic1Opacity,
            transition: "1s ease-in", 
            filter: blur,
            marginTop: "100px",
          }}>
        
            <div 
            style={{
              display: "flex", 
              flexDirection: flexStyle1, 
              padding: "20px 20px", 
              marginBottom: "10px",
            }}>
                <Lottie 
                  lottieRef={animationRef} 
                  style={{width: lottieWidth, height: lottieWidth}} 
                  animationData={topic1Animation} 
          />

              <div 
              style={{
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
        </>
    )
}

export default Topic1;