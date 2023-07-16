import Link from "next/link";
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

//LOTTIE LIB
import Lottie, {LottieRefCurrentProps} from "lottie-react";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const inter = Inter({ subsets: ['latin'] })

const Topic4 = ({ topic4Animation, mobile }) => {

    //ref
    const animationRef = useRef()

    //flexdirection
    const [flex, setFlex] = useState("row");
  
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
          className='maincardsAnimation2'
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            marginTop: "80px",
          }}>
            <div
            style={{
              width: "90%",
              backgroundImage: `url(${backgroundPic2.src})`,
              borderRadius: "20px 0px 0px 20px",
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