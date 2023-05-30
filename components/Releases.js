import { useContext, useEffect, useState } from "react";

import Image from 'next/image';

//motion lib
import {AnimatePresence, motion } from 'framer-motion'

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//import platform icons
import Spotify from "@/pictures/spotify.png";
import Apple from "@/pictures/apple.png";
import Deezer from "@/pictures/deezer.png";

const Releases = () => {

      //PASSING GLOBAL SETTINGS
      const { myData, loaderState, getData } = useContext(GlobalStates);

        //const myDataLength = myData.length;
      const [myDataLength, setMyDataLength] = useState(null);
      const [upperRange, setUpperRange] = useState(null);
      const [bottomRange, setBottomRange] = useState(null);
      //LOADER VISIBILITY
      const [loaderVisibility, setLoaderVisibility] = useState("hidden");
      useEffect(() => {
        if(loaderState === true){
            setLoaderVisibility("visible");
        }else{
            setLoaderVisibility("hidden");
        }
      });

      //FILTERING MYDATA

      const range = 4;
      const filteredMyData = myData.filter((data)=> data.releaseindex > bottomRange && data.releaseindex < upperRange)

      //NEXT RELEASES
      const nextReleasePage = () => {
        setUpperRange(upperRange - range +1);
        setBottomRange(bottomRange - range +1);
      }

      //NEXT RELEASES
      const backReleasePage = () => {
        setUpperRange(upperRange  + range - 1);
        setBottomRange(bottomRange + range - 1);        
      }

      //GET myData LENGTH
      const getDataLength =  () => {
        const length = myData.length + 1;
        setMyDataLength(length);
        setUpperRange(length);
        setBottomRange(length - range);
      }

      useEffect(() => {
        getDataLength();
      }, [getData])

      //SHOW AND HIDE NEXT AND BACK
      const [nextVisibility, setNextVisibility] = useState("visible");
      const [backVisibility, setBackVisibility] = useState("visible");

      useEffect(() => {
        if(bottomRange <= 0){
            setNextVisibility("hidden");
        }else{
            setNextVisibility("visible");
        }

        if(upperRange === myDataLength){
            setBackVisibility("hidden");
        }else{
            setBackVisibility("visible");
        }
      }, [getData, nextReleasePage, backReleasePage])

    return(
        <div className="releasepage">
        <div className="releasesList">
            <div className="releasesCard">
            {filteredMyData.map((data) => (
                <div className="frame"> 
                    <iframe 
                        width="260" 
                        height="260" 
                        src={data.youtubelink} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <h6>{data.artists} - {data.trackname}</h6>
                        <div className="icons">
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
                        <br/>
                        <p>{data.releasedate}</p>
                        <p>#{data.releaseindex}</p>
                    </div>

                ))}
                </div>

                <div className="next">
                    <button 
                        onClick={backReleasePage}
                        style={{visibility: backVisibility, rotate: "180deg"}}
                        className="material-symbols-outlined" 
                        title="back"                        
                    >navigate_next</button>
                    <button 
                        onClick={nextReleasePage}
                        style={{visibility: nextVisibility}} 
                        className="material-symbols-outlined" 
                        title="next"
                    >navigate_next</button>
                </div>
            </div>


            <br/><br/>
            <motion.div
                style={{visibility: loaderVisibility}}
                className="box2"
                animate={{
                scale: [1, 1.5, 1.5, 1, 1],

                }}
                transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
                }}
            ><h3>LOADING</h3></motion.div>            
        </div>
    )
}

export default Releases;