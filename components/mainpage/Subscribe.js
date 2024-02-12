import { useContext, useEffect, useRef, useState } from 'react'

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import topic3Animation from "@/components/lottieanimations/subscribe.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//components
import Subscribtion from '../Subscribtion';


const Subscribe = ({ backgroundPic2 }) => {

  const [formVisibility, setFormVisibility] = useState("hidden");

  //PASSING GLOBAL SETTINGS
  const { mobile } = useContext(GlobalStates);

  //ref
  const animationRef = useRef();


  //MOBILE LOGIC
  useEffect(() => {
      if(mobile === true) {
        animationRef.current.stop();
      }else{
        animationRef.current.play();
      }
  }, [mobile])


    return(
        <>
        <Subscribtion formVisibility={formVisibility} setFormVisibility={setFormVisibility}/>
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

            <div className='mainpageCards'>
              <div 
                style={{
                  marginRight: "30px"
                }}>
                  
                  <Lottie 
                    lottieRef={animationRef} 
                    className="lottieSize" 
                    animationData={topic3Animation} 
                  />
              
              </div>

              <div>
                <h1 className='mainpageTitles'>Don’t miss a thing</h1>
                <div style={{maxWidth: "600px"}}>     
                  <p className="mainpageP">Do you wanna get notified about new releases, competitions and much more? Subscribe our newsletter now.
                  </p>

                  <button className="nicebutton mt" onClick={() => setFormVisibility("showAnim")} >subscribe</button>
                
                </div>
              </div>
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
        </>
    )
}

export default Subscribe;