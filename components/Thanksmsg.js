import React from "react";
import Link from 'next/link'


const Thanksmsg = ({ visibility, setVisibility, setFormVisibility }) => {

    function changeVisibility() {
        setVisibility("hidden");
        setFormVisibility("visible");
    }

    return (
        <div 
        className="brush"
        style={{
            position: "absolute",
            top: "150px",
            //backgroundImage: `url(${backgroundPic2.src})`,   
            background: "rgba(20,20,20,0.8)",           
            visibility: visibility,
            display: "flex",
            flexDirection: "column",
            width: "80%",
            maxWidth: "600px",
            padding: "60px 60px",
            borderRadius: "30px",
            boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
            alignItems: "center",
            textAlign: "center"
        }}>
            <h1>Thank you for your message</h1>
            <p>we will check it as soon as possible :))</p>
            <br/>
            <div className="buttonsBox">

                <Link href="/contact">
                    <button className="nicebutton" onClick={changeVisibility} >write another one</button>                
                </Link>

                <Link href="/">
                    <button className="nicebutton" onClick={changeVisibility}>back to homepage</button>              
                </Link>
            </div>
        </div>
    )
}

export default Thanksmsg;