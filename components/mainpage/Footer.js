import Image from "next/image";
import Link from "next/link";

const Footer = ({ Logo, Instagram, Spotify, Facebook, Youtube }) => {

    return(
        <div 
        style={{
            background: "rgba(20,20,20,0.8)", 
            marginTop: "75px",
            padding: "75px 0px"


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
                src={Logo} 
                alt="sofa lofi logo"
                >   
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
                            <a href="https://open.spotify.com/user/3172sefla554nzu4bpuk3o3ysjme?si=99f3d22c46564509" target="_blank"><Image className="iconImg" src={Spotify} alt="spotify" width={75}/></a>
                        </div>

                        <div className="icon">
                            <a href="https://www.youtube.com/channel/UCVDaWGsukHQo677tAfySD6g" target="_blank"><Image className="iconImg" src={Youtube} alt="youtube" width={75}/></a>
                        </div>
    
                        <div className="icon">
                            <a href="https://www.instagram.com/sofalofi_rec/" target="_blank"><Image className="iconImg" src={Instagram} alt="instagram" width={90}/></a>
                        </div>
        
                        <div className="icon">
                            <a href="https://www.facebook.com/sofalofirec/" target="_blank"><Image className="iconImg" src={Facebook} alt="facebook" width={75}/></a>
                        </div>
  
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;