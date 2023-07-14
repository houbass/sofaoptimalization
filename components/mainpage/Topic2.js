import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link";
import { Inter } from 'next/font/google'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'

import {AnimatePresence, motion } from 'framer-motion'

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//LOTTIE LIB
import Lottie, {LottieRefCurrentProps} from "lottie-react";

//LOTTIE DATA
import animationData from "@/components/lottieanimations/music.json";

//pic 
import backgroundPic from "@/components/pic/background.svg"
import backgroundPic2 from "@/components/pic/background2.svg"

//import platform icons
import Spotify from "@/pictures/spotify.png";
import Apple from "@/pictures/apple.png";
import Deezer from "@/pictures/deezer.png";

const inter = Inter({ subsets: ['latin'] })

const Topic2 = ({ topic2Width, topic2Opacity, blur }) => {
    //PASSING GLOBAL SETTINGS
    const { myData } = useContext(GlobalStates);

    //Lottie ref
    const animationRef = useRef(null);

    //LATEST RELEASES STATES
    const [releasesQuantity, setReleasesQuantity] = useState(4);
    const latestReleases = myData.filter((data) => data.releaseindex > myData.length - releasesQuantity)
    const [actualWindowWidth, setActualWindowWidth] = useState(null);
 
    //RESIZE FUN
    const resizeFun = () => {
      setActualWindowWidth(window.innerWidth);
    }

    //SETTING A WINDOW WIDTH
    useEffect(() => {
      window.addEventListener("resize", resizeFun);
      setActualWindowWidth(window.innerWidth);

      return() => {
        window.cancelAnimationFrame("resize", resizeFun);
      }
    }, [])




    //LATEST RELEASES CHANGE WITH WIDTH
    useEffect(() => {
      if(actualWindowWidth < 740){
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
    })

    return(
        <>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            marginTop: "80px",
            opacity: topic2Opacity,
            filter: blur,
            transition: "2s ease-in"
          }}>
            <div
            style={{
              //marginTop: "500px",
              //left: "0",
              width: topic2Width,
              backgroundImage: `url(${backgroundPic2.src})`,
              borderRadius: "20px 0px 0px 20px",
              transition: "0.5s ease-in"
            }}>

              <div 
              style={{
                display: "flex", 
                flexDirection: "row", 
                padding: "20px 20px", 
                marginBottom: "10px",
                
              }}>
                <div>
                  <h1 className='big'>Listen to our latest releases</h1>
                  <div style={{maxWidth: "600px"}}>     
                    <p style={{fontSize: "20px"}}>
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
                  style={{width: "300px"}} 
                  onComplete={() => {
                    animationRef.current?.goToAndPlay(42, true)
                  }} 
                  lottieRef={animationRef} 
                  loop={false} 
                  animationData={animationData} 
                  />
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
                  {latestReleases.map((data) => (
                    <div key={data.releaseindex} className="frame2"> 
                    <iframe 
                        width="190" 
                        height="190" 
                        src={data.youtubelink} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <h6 style={{marginTop: "5px"}}>{data.artists} - {data.trackname}</h6>
                        <div className="icons2">
                            <div className="icon">
                                <a href={data.spotifylink} target="_blank"><Image className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href={data.ituneslink} target="_blank"><Image className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href={data.deezerlink} target="_blank"><Image className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
                    </div>
                  ))}
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