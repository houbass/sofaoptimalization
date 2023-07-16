import { useContext, useEffect, useState } from "react";

import Image from 'next/image';

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//import platform icons
import Spotify from "@/pictures/spotify.png";
import Apple from "@/pictures/apple.png";
import Deezer from "@/pictures/deezer.png";

const Releases = ({ filteredData }) => {

    //PASSING GLOBAL SETTINGS
    const { mobile } = useContext(GlobalStates);

    //states
    const [mobileFlex, setMobileFlex] = useState("row");
    const [loaderVisibility, setLoaderVisibility] = useState("hidden");
    const [youtubeVisiblity, setYoutubeVisibility] = useState("visible");

    //definice collekce databaze
    const [myData, setMyData] = useState([]);

    //get data
    useEffect(() => {
        setMyData(filteredData);
    }, []);

    const sorting = () => {
        //SORT DATA BY RELEASEINDEX
        myData?.sort((a,b)=>{return a.releaseindex - b.releaseindex});
        myData?.reverse();
      }
  
        //SORT MY DATA
        useEffect(() => {
            sorting();
          }, [myData]);

        //const myDataLength = myData.length;
        const [myDataLength, setMyDataLength] = useState(null);
        const [upperRange, setUpperRange] = useState(null);
        const [bottomRange, setBottomRange] = useState(null);
  
        //FILTERING MYDATA
        const range = 4;
        const filteredMyData = myData?.filter((data)=> data.releaseindex > bottomRange && data.releaseindex < upperRange)
  
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
          const length = myData?.length + 1;
          setMyDataLength(length);
          setUpperRange(length);
          setBottomRange(length - range);
        }
  
        useEffect(() => {
          getDataLength();
        }, [myData])
  
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
        }, [myData, nextReleasePage, backReleasePage])

        //mobile logic
        function resizeFun() {
            if(window.innerWidth < 900){
                setMobileFlex("column");
            }else{
                setMobileFlex("row");
            }
        }

        useEffect(() => {
            resizeFun()
            window.addEventListener("resize", resizeFun);

            return () => {
                window.removeEventListener("resize", resizeFun);
            }
        }, [mobile])

    return(
        <div className="releasepage">
        <div className="releasesList">
            <div 
            style={{
                display: "flex",
                flexDirection: mobileFlex,
                color: "black"
            }}>

            {filteredMyData?.map((data) => (
                <div key={data.releaseindex} className="frame"> 
                    <div 
                    style={{
                        width: "260px",
                        height: "260px",
                        background: "rgba(255,255,255,0.8)",
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        visibility: loaderVisibility,
                        transition: "1s"
                    }}>
                        <div className="loader">loading</div>
                    </div>
                    <iframe 
                        style={{
                            visibility: youtubeVisiblity,
                        }}
                        width="260" 
                        height="260" 
                        src={
                            data.youtubelink
                        } 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe> 
                        <h6>{data.artists} - {data.trackname}</h6>
                        <div className="icons">
                            <div className="icon">
                                <a href={data.spotifylink} target="_blank"><Image alt="spotify" className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href={data.ituneslink} target="_blank"><Image alt="apple" className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href={data.deezerlink} target="_blank"><Image alt="deezer" className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
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
        </div>
    )
}

export default Releases;