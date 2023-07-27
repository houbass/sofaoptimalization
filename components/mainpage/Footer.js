import Image from "next/image";
import Link from "next/link";

//pic
import logo from "../pic/newtrysvg.svg";

//import platform icons
import Instagram from "../pic/icons/instagramWhite.png";
import Spotify from "../pic/icons/spotifyWhite.png";
import Facebook from "../pic/icons/facebookWhite.png";


const Footer = () => {


    return(
        <div 
        style={{
            background: "rgba(20,20,20,0.8)", 
            height:"285px",
            marginTop: "75px",
            paddingTop: "30px"

        }}>
            <div 
            style={{
                //background: "orange",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <Image 
                className="footerLogo"
                src={logo} >   
                </Image>

                <div 
                className="brush footerhello"
                >
                    
                    <Link 
                    style={{
                    fontSize: "22px",
                    color: "white", 
                    textDecoration: "none", 
                    cursor: "pointer",
                    }}
                    href="/contact">
                    <h2 style={{

                        paddingBottom: "5px",
                        }} >Say Hello</h2>
                    </Link>
                    <Link style={{color: "rgba(246, 85, 85, 0.902)", textDecoration: "none", cursor: "pointer"}} href="mailto: sofalofi.rec@gmail.com">
                    <h3>sofalofi.rec@gmail.com</h3>
                    </Link>
                    <div 
                    style={{
                    //width: "500px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    gap: "10px",
                    padding: "10px 5px",
                    //background: "white",
                    marginLeft: "-12px"
                    }}>
    
                        <div className="icon">
                            <a href="https://www.instagram.com/sofalofi_rec/" target="_blank"><Image className="iconImg" src={Instagram} /></a>
                        </div>
        
                        <div className="icon">
                            <a href="https://open.spotify.com/user/3172sefla554nzu4bpuk3o3ysjme?si=99f3d22c46564509" target="_blank"><Image className="iconImg" src={Spotify} /></a>
                        </div>
        
                        <div className="icon">
                            <a href="https://www.facebook.com/sofalofirec/" target="_blank"><Image className="iconImg" src={Facebook} /></a>
                        </div>
  
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;