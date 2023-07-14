import styles from '@/styles/Home.module.css'
import { useRef, useState } from 'react';

//local storage hook
import useLocalStorageState from 'use-local-storage-state'

const Spotifyplayer = () => {

    //PAGE REF
    const playerRef = useRef(null);

    //BIGGER STATES
    const [height, setHeight] = useState(90);
    const [width, setWidth] = useLocalStorageState('width', {defaultValue: "120px" });
    const [btnRotate, setBtnRotate] = useState("0deg");
    const [btnToggler, setBtnToggler] = useState(false);
    const [btnBiggerVisibility, setBtnBiggerVisibility] = useLocalStorageState('btnBiggerVisibility', {defaultValue: "hidden" });

    //CLOSE STATES
    const [closeBtnText, setCloseBtnText] = useLocalStorageState('closeBtnText', {defaultValue: "chevron_left" });
    const [closeBtnToggler, setCloseBtnToggler] = useLocalStorageState('closeBtnToggler', {defaultValue: true });
    const [closeBtnVisibility, setCloseBtnVisibility] = useState("visible");


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
            setWidth("120px");
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
        <div className={`${styles.spotifyplayer}`} style={{width: width, height: height}}>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <button className='material-symbols-outlined' style={{ height:"22px", width:"22px", rotate: btnRotate, visibility: btnBiggerVisibility, borderRadius: "50%", marginBottom: "6px"}}
                 onClick={heightHandler}>expand_less</button>

            </div>

            <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
            <button className='material-symbols-outlined' style={{height:"22px", width:"22px", visibility: closeBtnVisibility, marginTop: "28px", borderRadius: "50%", marginRight: "8px", marginLeft: "8px"}} 
            onClick={() => {
                closeHandler();

            }}>
                {closeBtnText}
            </button>
            <iframe ref={playerRef} style={{border: "none"}}
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