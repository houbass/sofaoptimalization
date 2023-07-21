import { useContext, useEffect, useRef } from 'react';

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import topic1Animation from "@/components/lottieanimations/sofa.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

const Topic1 = () => {

  //PASSING GLOBAL SETTINGS
  const { mobile } = useContext(GlobalStates);

  //animation ref
  const animationRef = useRef();
      
  /*
  useEffect(() => {
    if(mobile === true) {
      animationRef.current.stop();
    }else{
      animationRef.current.play();
    }
  }, [mobile])
*/

    return(
        <>
          <div 
          className='maincardsAnimation' 
          style={{
            width: "90%",
            borderRadius: "0 20px 20px 0",
            backgroundImage: `url(${backgroundPic2.src})`,
            marginTop: "100px",
          }}>
        
            <div 
            className='mainpageCards'
            >
                <Lottie 
                  lottieRef={animationRef} 
                  className="lottieSize" 
                  animationData={topic1Animation} 
          />

              <div 
              style={{
              }}>
                <h1 className='mainpageTitles' >Listen to our playlist</h1>
                <div style={{maxWidth: "600px"}}>     
                  <p className="mainpageP" >We are a music label with taste for lofi hip hop, focusing to help you 
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