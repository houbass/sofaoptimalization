import { useEffect, useState } from "react";
import Image from 'next/image';

import YouTubeVideo from "./YoutubeVideoInfo";

//import platform icons
import Spotify from "components/pic/icons/spotify.svg";
import Apple from "components/pic/icons/apple.svg";
import Deezer from "components/pic/icons/deezer.svg";

const Releases = ({ filteredData }) => {

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

    return(
        <div className="releasepage">
            <div className="releasesList">
                <div 
                className="releasesFlex"
                style={{
                    color: "black"
                }}>
                    {filteredMyData?.map((data) => (
                        <div key={data.releaseindex} className="frame"> 
                        
                            <YouTubeVideo videoId={data.youtubelink} />
                    
                            <h5 style={{marginTop: "5px"}} className="courier">{data.trackname}</h5>
                            <h6 style={{marginTop: "5px"}} className="courier">{data.artists}</h6>
                            <div className="icons">
                                <div className="icon">
                                    <a href={data.spotifylink} target="_blank"><Image alt="spotify" className="iconImg" src={Spotify} width={75} /></a>
                                </div>
                                <div className="icon">
                                    <a href={data.ituneslink} target="_blank"><Image alt="apple" className="iconImg" src={Apple} width={75}/></a>
                                </div>
                                <div className="icon">
                                    <a href={data.deezerlink} target="_blank"><Image alt="deezer" className="iconImg" src={Deezer} width={75}/></a>
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