import Link from "next/link";
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

//LOTTIE LIB
import Lottie, {LottieRefCurrentProps} from "lottie-react";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const inter = Inter({ subsets: ['latin'] })

const Topic4 = ({ topic4Animation, mobile, titleSize, flexStyle1, lottieWidth, pSize }) => {

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
    }, [topic4Animation]);

    //FLEX MOBILE LOGIC
    useEffect(() => {
      if(flexStyle1 === "column"){
        //set "column-reverse"
        setFlex("column-reverse")
      }else{
        //set "row"
        setFlex("row")
      }
    }, [flexStyle1])

    return(
        <>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            marginTop: "80px",
            opacity: "1",
            transition: "2s ease-in"
          }}>
            <div
            style={{
              width: "90%",
              //backgroundImage: `url(${backgroundPic2.src})`,
              borderRadius: "20px 0px 0px 20px",
              transition: "0.5s ease-in"
            }}>

              <div 
              style={{
                display: "flex", 
                flexDirection: flex, 
                padding: "20px 20px", 
                marginBottom: "10px",
                
              }}>
                <div>
                  <h1 style={{fontSize: titleSize}}>Send us your music</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p style={{fontSize: pSize}}>
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
                  style={{width: lottieWidth, height: lottieWidth}} 
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