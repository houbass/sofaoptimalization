import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';

//local storage hook
import useLocalStorageState from 'use-local-storage-state'

const Spotifyplayer = () => {

    //PAGE REF
    const playerRef = useRef(null);

    //BIGGER STATES
    const [height, setHeight] = useState(90);
    const [width, setWidth] = useLocalStorageState('width', {defaultValue: "115px" });
    const [btnRotate, setBtnRotate] = useState("0deg");
    const [btnToggler, setBtnToggler] = useState(false);
    const [btnBiggerVisibility, setBtnBiggerVisibility] = useLocalStorageState('btnBiggerVisibility', {defaultValue: "hidden" });

    //CLOSE STATES
    const [closeBtnText, setCloseBtnText] = useLocalStorageState('closeBtnText', {defaultValue: "chevron_left" });
    const [closeBtnToggler, setCloseBtnToggler] = useLocalStorageState('closeBtnToggler', {defaultValue: true });
    const [closeBtnVisibility, setCloseBtnVisibility] = useState("visible");

    //VISIBILITY
    const [opacity, setOpacity] = useState("0");

    //on load opacity
    useEffect(() => {
        setTimeout(() => {
            setOpacity("1");
        }, 3000)
    }, [])

    //height handler
    const heightHandler = () => {
        if(btnToggler === false){
            setHeight(400);
            setBtnRotate("180deg");
            setBtnToggler(true);
            setCloseBtnVisibility("hidden");        
        }else{
            setHeight(90);
            setBtnRotate("0deg");
            setBtnToggler(false);  
            setCloseBtnVisibility("visible");          
        }
    }

    //close handler
    const closeHandler = () => {
        if(closeBtnToggler === false){
            setWidth("115px");
            setCloseBtnText("chevron_left");
            setCloseBtnToggler(true);
            setBtnBiggerVisibility("hidden");
        }else{
            setWidth("100%");
            setCloseBtnText("chevron_right");
            setCloseBtnToggler(false); 
            setBtnBiggerVisibility("visible");           
        }
    }



    return (
        <div className={`${styles.spotifyplayer} maincardsAnimation3`} style={{width: width, height: height }}>


            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: "5px"}}>
            <div className='spotifybuttons2' style={{visibility: btnBiggerVisibility}}> 
                <button className='material-symbols-outlined' style={{ rotate: btnRotate, background: "none", height: "100%", width: "100%", border: "none" }}
                 onClick={heightHandler}>
                    
                    <p style={{background: "none", color: "black"}} className='material-symbols-outlined'>expand_less</p>
                    </button>
            </div>
            </div>


            <div style={{display: "flex", flexDirection: "row", height: "100%"}}>

            <div className='spotifybuttons' style={{visibility: closeBtnVisibility}}> 
            <button  style={{ background: "none", height: "100%", width: "100%", border: "none" }} 
            onClick={() => {
                closeHandler();

            }}>
                <p style={{background: "none", color: "black"}} className='material-symbols-outlined'>{closeBtnText}</p>
                
            </button>
            </div>


            <iframe ref={playerRef} style={{border: "none", marginLeft: "40px"}}
            title="Sofa Lofi spotify playlist"
            className="playlistFrame"
            src="https://open.spotify.com/embed/playlist/6so9XlkasaOqQFNghgzUX5?utm_source=generator" 
            width= "100%"
            height= "100%"
            allowFullScreen=""                 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            >
            </iframe>
            </div>

        </div>
    )
};

export default Spotifyplayer;