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

const Topic2 = ({ topic2Opacity, topic2Animation, blur, titleSize, flexStyle1, lottieWidth, pSize }) => {


    //Lottie ref
    const animationRef = useRef(null);

    //LATEST RELEASES STATES
    const [releasesQuantity, setReleasesQuantity] = useState(4);

    const [actualWindowWidth, setActualWindowWidth] = useState(null);
 
    //flexdirection
    const [flex, setFlex] = useState("row");

    //RESIZE FUN
    const resizeFun = () => {
      setActualWindowWidth(window.innerWidth);
    }

    //GET WINDOW WIDTH
    useEffect(() => {
      window.addEventListener("resize", resizeFun);
      resizeFun();

      return() => {
        window.removeEventListener("resize", resizeFun);
      }
    }, [])

    //LATEST RELEASES CHANGE WITH WIDTH
    useEffect(() => {
      if(actualWindowWidth < 550){
        setReleasesQuantity(1);
      }
      if(actualWindowWidth < 740 && actualWindowWidth > 550){
        setReleasesQuantity(2);
      }
      if(actualWindowWidth < 980 && actualWindowWidth > 740){
        setReleasesQuantity(3);
      }
      if(actualWindowWidth > 980 && actualWindowWidth < 1225){
        setReleasesQuantity(4);
      }
      if(actualWindowWidth > 1225){
        setReleasesQuantity(5);
      }
    }, [actualWindowWidth])



    //MOBILE ANIMATION LOGIC
    /*
    useEffect(() => {

      if(mobile === true) {
        animationRef.current.goToAndStop(42, true);
      }else{
        animationRef.current.play();
      }

    }, [topic2Animation])
        */



    //FLEX STYLE LOGIC
    useEffect(() => {
        //flex logic
        function flexLogic() {
          if(flexStyle1 === "column"){
            //set "column-reverse"
            setFlex("column-reverse")
          }else{
            //set "row"
            setFlex("row")
          }
        }
        flexLogic()
    }, [flexStyle1])

    return(
        <>
          <div style={{
            display: "flex",
            flexDirection: "col",
            justifyContent: "right",
            marginTop: "80px",
            opacity: topic2Opacity,
            filter: blur,
            transition: "2s ease-in",
            background: "orange",
            width: "100%",
            maxWidth: "90%",
            marginLeft: "10%",
            //backgroundImage: `url(${backgroundPic2.src})`,
            borderRadius: "20px 0px 0px 20px",
          }}>
            <div>
              <div 
              style={{
                display: "flex", 
                flexDirection: flex, 
                padding: "20px 20px", 
                marginBottom: "10px",
                
              }}>
                <div>
                  <h1 style={{fontSize: titleSize}}>Listen to our latest releases</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p style={{fontSize: pSize}}>
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
                  {/*
                  <Lottie 
                  lottieRef={animationRef}
                  style={{width: lottieWidth, height: lottieWidth}} 
                  onComplete={() => {
                    animationRef.current.goToAndPlay(42, true);
                  }} 
                  loop={false}
                  animationData={topic2Animation} 
                  />
                */ }
                </div>
              </div>
              
              <div 
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "0 0 0 20px"
              }}>
                <div 
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "300px"
                }}>

                </div>
                <div 
                style={{
                  display: "flex", 
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                </div>

              </div>
            </div>
          </div>
        </>
    )
}

export default Topic2;