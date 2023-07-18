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
            backgroundImage: `url(${backgroundPic2.src})`,             
            visibility: visibility,
            display: "flex",
            flexDirection: "column",
            width: "80%",
            maxWidth: "800px",
            padding: "60px 60px",
            borderRadius: "30px",
            boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
            alignItems: "center",
            textAlign: "center"
        }}>
            <h1>Thank you for your submission</h1>
            <p>we let you know as soon as possible :))</p>
            <div className="buttonsBox">

                <Link href="/submit">
                    <button className="nicebutton" onClick={changeVisibility} >submit another one</button>                
                </Link>

                <Link href="/">
                    <button className="nicebutton" onClick={changeVisibility}>back to homepage</button>              
                </Link>
            </div>
        </div>
    )
}

export default Thanksdemo;