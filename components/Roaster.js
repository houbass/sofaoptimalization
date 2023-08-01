import Image from "next/image";
import Link from "next/link";

//import platform icons
import Spotify from "@/pictures/spotify.png";
import Spotify2 from "components/pic/icons/spotifyWhite.png";
import Apple from "@/pictures/apple.png";
import Deezer from "@/pictures/deezer.png";
import Instagram from "components/pic/icons/instagramWhite.png";
import Facebook from "components/pic/icons/facebookWhite.png";

export default function Roaster() {

    return(
        <>
        <div 
        className="roaster"
        style={{

        }}>
            <div className="buttondiv">
                <p>listen to our latest release</p>
                <p><strong>Artist - Track</strong></p>
                <div>
                    <Link href="" >
                        <Image className="iconRoaster" src={Spotify} />
                    </Link>

                    <Link href="" >
                        <Image className="iconRoaster" src={Apple} />
                    </Link>

                    <Link href="" >
                        <Image className="iconRoaster" src={Deezer} />
                    </Link>
                </div>
            </div>

            <Link className="roasterlink" href="https://open.spotify.com/playlist/6so9XlkasaOqQFNghgzUX5?si=1dc2f69d937b4fcb" target="_blank" >
            <button className="roasterbtn">Listen to our Spotify playlist</button>
            </Link>

            <Link className="roasterlink" href="submit/playlist" >
                <button className="roasterbtn">FREE playlist submission</button>
            </Link>


            <Link className="roasterlink" href="submit/demo" >
                <button className="roasterbtn">Demo submission (for releasing)</button>
            </Link>
            
            <Link className="roasterlink" href="./" >
                <button className="roasterbtn">Website</button>  
            </Link>    

            <div 
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%"
            }}>
                <div className="icon">
                    <a href="https://www.instagram.com/sofalofi_rec/" target="_blank"><Image className="iconImg" src={Instagram} /></a>
                </div>
        
                <div className="icon">
                    <a href="https://open.spotify.com/user/3172sefla554nzu4bpuk3o3ysjme?si=99f3d22c46564509" target="_blank"><Image className="iconImg" src={Spotify2} /></a>
                </div>
        
                <div className="icon">
                    <a href="https://www.facebook.com/sofalofirec/" target="_blank"><Image className="iconImg" src={Facebook} /></a>
                </div>
            </div>
        </div>
        </>
    )
}