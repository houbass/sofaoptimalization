import { useContext, useEffect, useRef } from 'react'
import Link from "next/link";

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import topic2Animation from "@/components/lottieanimations/music.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

const Topic2 = ({ backgroundPic2 }) => {

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
          style={{
            display: "flex",
            flexDirection: "col",
            justifyContent: "right",
            marginTop: "80px",
            width: "100%",
            maxWidth: "90%",
            marginRight: "10%",
            backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "0px 20px 20px 0px",
          }}>
            <div>
              <div className='mainpageCards-reverse'>
                <div>
                  <h1 className='mainpageTitles'>Check out latest Sofa Lofi music</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p className="mainpageP">
                    Let’s check our regular monday releases from the finests lofi producers.
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