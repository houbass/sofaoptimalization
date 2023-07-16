import Image from 'next/image'
import Link from "next/link";
import { Inter } from 'next/font/google'
import { useContext, useEffect, useRef, useState } from 'react'

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//LOTTIE LIB
import Lottie from "lottie-react";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const inter = Inter({ subsets: ['latin'] })

const Topic2 = ({ topic2Animation }) => {

    //PASSING GLOBAL SETTINGS
    const { mobile } = useContext(GlobalStates);

    //Lottie ref
    const animationRef = useRef(null);
 
    //flexdirection
    const [flex, setFlex] = useState("row");

    //MOBILE ANIMATION LOGIC
    useEffect(() => {

      if(mobile === true) {
        animationRef.current.goToAndStop(42, true);
      }else{
        animationRef.current.play();
      }
    }, [topic2Animation])

    return(
        <>
          <div 
          className='maincardsAnimation2'
          style={{
            display: "flex",
            flexDirection: "col",
            justifyContent: "right",
            marginTop: "80px",
            width: "100%",
            maxWidth: "90%",
            marginLeft: "10%",
            backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "20px 0px 0px 20px",
          }}>
            <div>
              <div className='mainpageCards-reverse'>
                <div>
                  <h1 className='mainpageTitles'>Listen to our latest releases</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p className="mainpageP">
                      Lets check our regular monday releases from the finests lofi producers.
                    </p>
                    <Link href="/releases">
                      <button className="nicebutton mt" >check them all</button>
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
                  className="lottieSize" 
                  onComplete={() => {
                    animationRef.current.goToAndPlay(42, true);
                  }} 
                  loop={false}
                  animationData={topic2Animation} 
                  />
                </div>
              </div>
              
            </div>
          </div>
        </>
    )
}

export default Topic2;