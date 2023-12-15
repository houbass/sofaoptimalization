import Image from "next/image";
import Link from "next/link";

//import platform icons
import Spotify2 from "components/pic/icons/spotifyWhite.png";
import Instagram from "components/pic/icons/instagramWhite.png";
import Facebook from "components/pic/icons/facebookWhite.png";
import Youtube from "components/pic/icons/youtube_white.svg";

//components
import RoasterRelease from "./RoasterRelease";

export default function Roaster({ filteredData, filteredData2 }) {

    return(
        <>
        <div 
        className="roaster"
        style={{

        }}>
            <RoasterRelease filteredData={filteredData} />

            <Link className="roasterlink" href="https://open.spotify.com/playlist/6so9XlkasaOqQFNghgzUX5" target="_blank" >
                <button className="roasterbtn">🎵 Listen to our Spotify playlist</button>
            </Link>

            <Link className="roasterlink" href={filteredData2[0]?.url} target="_blank" >
                <button className="roasterbtn">📺 24/7 Youtube live stream</button>
            </Link>

            <Link className="roasterlink" href="submit/playlist" >
                <button className="roasterbtn">📥 FREE playlist submission</button>
            </Link>


            <Link className="roasterlink" href="submit/demo" >
                <button className="roasterbtn">📥 Demo submission (for releasing)</button>
            </Link>
            
            <Link className="roasterlink" href="./" >
                <button className="roasterbtn">💻 Website</button>  
            </Link>    

            <div 
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%"
            }}>
                <div className="icon">
                    <a href="https://open.spotify.com/user/3172sefla554nzu4bpuk3o3ysjme" target="_blank"><Image className="iconImg" src={Spotify2} alt="spotify" /></a>
                </div>

                <div className="icon">
                    <a href="https://www.youtube.com/@sofalofi" target="_blank"><Image width={90} className="iconImg" src={Youtube} alt="youtube" /></a>
                </div>

                <div className="icon">
                    <a href="https://www.instagram.com/sofalofi_rec" target="_blank"><Image className="iconImg" src={Instagram} alt="instagram"/></a>
                </div>
        
                <div className="icon">
                    <a href="https://www.facebook.com/sofalofirec" target="_blank"><Image className="iconImg" src={Facebook} alt="facebook" /></a>
                </div>
            </div>
        </div>
        </>
    )
}