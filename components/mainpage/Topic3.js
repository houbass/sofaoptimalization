import { useContext, useEffect, useRef } from 'react'
import Link from 'next/link'

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import topic3Animation from "@/components/lottieanimations/workplace.json";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'


const Topic3 = ({ introClasses, backgroundPic2 }) => {

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
          <div 
          className={introClasses[3]}
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
                <h1 className='mainpageTitles'>Let’s try Sofa workplace</h1>
                <div style={{maxWidth: "600px"}}>     
                  <p className="mainpageP">This feature will help you to work and listen to music in one place.
                  </p>
                  <Link href="/workplace">
                    <button className="nicebutton mt" >try it now</button>
                  </Link>
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

export default Topic3;