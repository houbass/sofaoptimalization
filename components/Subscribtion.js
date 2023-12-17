import { useEffect, useState } from "react";

//components
import {subscribe} from "./CreateContactApi";


export default function Subscribtion({ formVisibility, setFormVisibility }) {
    const [emai, setEmail] = useState("");
    const [errText, setErrText] = useState("");
    const [thanksVisibility, setThanksVisibiity] = useState("hidden");
    const [inputVisibility, setInputVisibility] = useState("hidden");

    const [btnClass2, setBtnClass2] = useState("");
    const [btnText, setBtnText] = useState("subscribe");


    function subscibeNow() {

        setBtnClass2("fa fa-spinner fa-spin");
        setBtnText("")
    
        subscribe(emai)
          .then(result => {
            setErrText(result);

            if(result === "Thank you for subscription :))") {
                setThanksVisibiity("visible");
            }
            setBtnClass2("");
            setBtnText("subscribe")
          })
    }

    function close() {
        setFormVisibility("hidden");
        setThanksVisibiity("hidden");
        setInputVisibility("hidden");
    }

    useEffect(() => {
        if(formVisibility === "visible" && thanksVisibility === "hidden") {
            setInputVisibility("visible");
            
        } else if(formVisibility === "visible" && thanksVisibility === "visible") {
            setInputVisibility("hidden");
        }
    })

    useEffect(() => {
        setErrText("");
    }, [formVisibility])




    return (
        <div 
        style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.95)",
            width: "100%",
            height: "100vh",
            visibility: formVisibility
        }}>
            <div 
            style={{
                //background: "orange",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "300px",
                width: "100%"
            }}>

            <div style={{position: "relative", visibility: inputVisibility}}>
                <p className='error' style={{position: "absolute", top: "0"}}>{errText}</p>
                <p className='error' style={{visibility: "hidden", marginBottom: "10px"}}>{errText}</p>
                <input className="input length courier"  placeholder='write your email here' onChange={(e) => setEmail(e.target.value)}></input>
                <button className='nicebutton' onClick={subscibeNow}><i class={btnClass2}></i>{btnText}</button>
            </div>

            <div style={{position: "absolute",  width: "100%", maxWidth: "300px", visibility: thanksVisibility}}>
                <p  style={{position: "absolute", top: "0", fontSize: "35px", fontWeight: "bold", fontFamily: "'Caveat Brush', cursive"}}>{errText}</p>
                <p  style={{visibility: "hidden", marginBottom: "10px", fontSize: "35px", fontWeight: "bold", fontFamily: "'Caveat Brush', cursive"}}>{errText}</p>
            </div>

            <br/>
            <button 
            className='nicebutton2'
            onClick={close} 
            style={{
                //padding: "10px",
                width: "fit-content",
            }}>
                close
            </button>


            </div>

        </div>
    )
}


