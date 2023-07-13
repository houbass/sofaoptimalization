import React from "react";
import Link from 'next/link'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

const Thanksdemo = ({ visibility, setVisibility, setFormVisibility }) => {

    function changeVisibility() {
        setVisibility("hidden");
        setFormVisibility("visible");
        
    }

    return (
        <div style={{
            position: "absolute",
            top: "200px",
            //translate: "0px 180px",
            backgroundImage: `url(${backgroundPic2.src})`,             
            //background: "white",
            //zIndex: props.visibility,
            //opacity: props.opacity,
            //transition: props.transition,
            //color: "black",
            visibility: visibility,
            display: "flex",
            flexDirection: "column",
            padding: "60px 60px",
            maxWidth: "800px",
            width: "90%",
            borderRadius: "30px",
            boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
            alignItems: "center"
        }}>
            <h1>Thank you for your submission</h1>
            <p>we let you know as soon as possible :))</p>
            <div className="buttonsBox">

                <Link href="/submit">
                    <button className="btnStyle2" onClick={changeVisibility} >submit another one</button>                
                </Link>

                <Link href="/">
                    <button className="btnStyle2" onClick={changeVisibility}>back to homepage</button>              
                </Link>
            </div>
        </div>
    )
}

export default Thanksdemo;