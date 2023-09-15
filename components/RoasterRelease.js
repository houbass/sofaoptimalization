import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";


//import platform icons
import Spotify from "@/pictures/spotify.png";
import Apple from "@/pictures/apple.png";
import Deezer from "@/pictures/deezer.png";


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

console.log(myData[0])
    
    return(
        <>
            <div className="buttondiv">
                <p>checkout to our latest release</p>
                <p><strong>{myData[0]?.artists} - {myData[0]?.trackname}</strong></p>
                <div style={{
                    marginTop: "10px"
                }}>
                    <a href={myData[0]?.spotifylink} target="_blank">
                        <Image className="iconRoaster" src={Spotify} />
                    </a>

                    <a href={myData[0]?.ituneslink} target="_blank">
                        <Image className="iconRoaster" src={Apple} />
                    </a>

                    <a href={myData[0]?.deezerlink} target="_blank">
                        <Image className="iconRoaster" src={Deezer} />
                    </a>
                </div>
            </div>
        </>
    )
}