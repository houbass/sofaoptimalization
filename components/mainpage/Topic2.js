import { useContext, useEffect, useRef, useState } from 'react'
import Link from "next/link";

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import topic2Animation from "@/components/lottieanimations/music.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const Topic2 = () => {

    //PASSING GLOBAL SETTINGS
    const { mobile } = useContext(GlobalStates);

    //Lottie ref
    const animationRef = useRef(null);

 
    //MOBILE ANIMATION LOGIC
    useEffect(() => {
      if(mobile === true) {
        animationRef.current.goToAndStop(42, true);
      }else{
        animationRef.current.play();
      }
    }, [mobile])


    return(
        <>
          <div 
          className='maincardsAnimation'
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
                  <h1 className='mainpageTitles'>Check out latest Sofa Lofi music</h1>
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