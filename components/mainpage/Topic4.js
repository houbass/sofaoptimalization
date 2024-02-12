import Link from "next/link";
import { useContext, useEffect, useRef } from 'react'

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import topic4Animation from "@/components/lottieanimations/production.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'


const Topic4 = ({ backgroundPic2 }) => {

    //PASSING GLOBAL SETTINGS
    const { mobile } = useContext(GlobalStates);

    //ref
    const animationRef = useRef()

   
    //MOBILE LOGIC
    useEffect(() => {
        if(mobile === true) {
          animationRef.current.stop();
        }else{
          animationRef.current.play();
        }
    }, [mobile]);
  

    return(
        <>
          <div 
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            //marginTop: "80px",
          }}>
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

              <div className='mainpageCards-reverse'>
                <div>
                  <h1 className='mainpageTitles'>Send us your music</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p className="mainpageP">
                      Are you a Lo-Fi producer? Submit your music to our Spotify playlist or to release on Sofa Lofi Records.
                    </p>
                    <Link href="/submit">
                      <button className="nicebutton mt" >submit</button>
                    </Link>
                  </div>
                </div>

                <div 
                style={{
                  marginRight: "30px"
                }}>
                  
                  <Lottie 
                  lottieRef={animationRef}
                  className="lottieSize" 
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