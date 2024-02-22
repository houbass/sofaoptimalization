import Image from "next/image";
import { useLayoutEffect, useState } from "react";

//import platform icons
import Spotify from "components/pic/icons/spotify.svg";
import Apple from "components/pic/icons/apple.svg";
import Deezer from "components/pic/icons/deezer.svg";
import Youtube from "components/pic/icons/youtube.svg";

export default function RoasterRelease({ filteredData }) {

    //definice collekce databaze
    const [myData, setMyData] = useState([]);

    //SORT MY DATA
    const sorting = async() => {
        //SORT DATA BY RELEASEINDEX
        filteredData?.sort((a,b)=>{return a.releaseindex - b.releaseindex});
        filteredData?.reverse();
    }

    useLayoutEffect(() => {
        sorting();
    }, [filteredData]);
    
    useLayoutEffect(() => {
        setMyData(filteredData);
    }, [sorting]);
    
    return(
        <>
            <div className="buttondiv">
                <p className="arial">checkout to our latest release</p>
                <h3 className="brush" style={{fontSize: "20px"}}><strong>{myData[0]?.artists} - {myData[0]?.trackname}</strong></h3>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <a href={myData[0]?.spotifylink} target="_blank">
                        <Image className="iconRoaster" src={Spotify} alt="spotify" width={75}/>
                    </a>

                    <a href={`https://www.youtube.com/watch?v=${myData[0]?.youtubelink}`} target="_blank">
                        <Image className="iconRoasterYoutube" src={Youtube} alt="youtube" width={75}/>
                    </a>

                    <a href={myData[0]?.ituneslink} target="_blank">
                        <Image className="iconRoaster" src={Apple} alt="apple" width={75}/>
                    </a>

                    <a href={myData[0]?.deezerlink} target="_blank">
                        <Image className="iconRoaster" src={Deezer} alt="deezer" width={75}/>
                    </a>
                </div>
            </div>
        </>
    )
}
