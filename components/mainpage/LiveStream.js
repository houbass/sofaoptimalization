import { useContext, useEffect, useRef } from 'react'

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import topic2Animation from "@/components/lottieanimations/livestream.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'


const LiveStream = ({ backgroundPic2, streamUrl }) => {

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
            marginLeft: "10%",
            backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "20px 0px 0px 20px",
          }}>
            <div>
              <div className='mainpageCards'>
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

                <div>
                  <h1 className='mainpageTitles'>We are streaming 24/7 on Youtube</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p className="mainpageP">
                    Wanna listen music without interuption and advertises? Let’s check out our 24/7 Youtube live stream.
                    </p>
                    <a href={streamUrl[0].url} target="_blank">
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

export default LiveStream;