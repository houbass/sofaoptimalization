import styles from '@/styles/Home.module.css'
import { useState } from 'react';

const Spotifyplayer = () => {

    const [height, setHeight] = useState(90);
    const [btnRotate, setBtnRotate] = useState("180deg");
    const [btnToggler, setBtnToggler] = useState(false);
    const heightHandler = () => {

        if(btnToggler === false){
            setHeight(550);
            setBtnRotate("0deg");
            setBtnToggler(true);
        }else{
            setHeight(90);
            setBtnRotate("180deg");
            setBtnToggler(false);            
        }

    }

    return (
        <div className={`${styles.spotifyplayer}`} style={{height: height}}>


            <button style={{rotate: btnRotate}} onClick={heightHandler}>V</button>

            <iframe 
            title="Sofa Lofi spotify playlist"
            className="playlistFrame"
            src="https://open.spotify.com/embed/playlist/6so9XlkasaOqQFNghgzUX5?utm_source=generator" 
            Width= "100%"
            height= "100%"
            allowfullscreen=""                 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            >
            </iframe>

        </div>
    )
};

export default Spotifyplayer;