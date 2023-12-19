import { useEffect, useState } from "react";

//components
import {subscribe} from "../config/CreateContactApi";


export default function Subscribtion({ formVisibility, setFormVisibility }) {
    const [emai, setEmail] = useState("");
    const [errText, setErrText] = useState(" ");
    const [thanksVisibility, setThanksVisibiity] = useState("hidden");

    const [inputVisibility, setInputVisibility] = useState("1");

    const [btnClass2, setBtnClass2] = useState("");
    const [btnText, setBtnText] = useState("subscribe");


    //SEND AND CHECK SUBSCRIBED EMAIL
    function subscribeNow() {
        setBtnClass2("fa fa-spinner fa-spin");
        setBtnText("")
    
        subscribe(emai)
          .then(result => {
            
            if(result === "Thank you for subscription :))") {
                setErrText("");
                setInputVisibility("0");

                setTimeout(() => {
                    setThanksVisibiity("showAnim");

                    setTimeout(() => {
                        setThanksVisibiity("hideAnim");
                        setFormVisibility("hideAnim");
                        setTimeout(() => {
                            setInputVisibility("1");
    
                        }, 500);
                    }, 1500);
                }, 500);
            } else{
                setErrText(result);
            }

            
            setBtnClass2("");
            setBtnText("subscribe")
          })
    }

    //CLOSE TAB
    function close() {
        setFormVisibility("hideAnim");
        setErrText("");
    }

    //CLOSE ON ESCP
    function closeOnKey(e) {
        if(e.key === "Escape") {
            close()
        }
    }

    //ADDING EVENT LISTENER
    useEffect(() => {
        window.addEventListener("keydown", closeOnKey);

        return () => {
            window.removeEventListener("keydown", closeOnKey);
        }
    })



    return (
        <>

        <div 
        //onClick={close}
        className={formVisibility}
        style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            //background: "rgba(0,0,0,0.9)",
            //background: "orange",
            width: "100%",
            height: "100vh",
        }}>
            <div 
            onClick={close}
            style={{
                background: "rgba(0,0,0,0.9)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                //maxWidth: "450px",
                width: "100%",
                height: "100vh",
                transition: "0.5s",
                //opacity: inputVisibility,
                //border: "2px solid rgba(200,200,200)",
                borderRadius: "25px",
                position: "absolute",
                zIndex: 6
            }}></div>
            <div 
            style={{
                background: "rgb(10,10,10)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "450px",
                width: "90%",
                transition: "0.5s",
                opacity: inputVisibility,
                border: "2px solid rgba(200,200,200)",
                borderRadius: "25px",
                position: "absolute",
                zIndex: 7
            }}>
                <div 
                style={{
                    margin: "10px 10px 20px 0px",
                    //background: "orange",
                    display: "flex",
                    flexDirection: "row",
                    //alignItems: "right",
                    justifyContent: "right"
                }}>
                    <button 
                    className='nicebutton3'
                    onClick={close} 
                    >
                        +
                    </button>
                </div>
                <div 
                style={{
                    padding: "0px 40px 40px 40px",
                }}>
                    <p className='error2' style={{ marginBottom: "10px", minHeight:"20px"}}>{errText}</p>
                    <input 
                    style={{ marginBottom: "20px"}}
                    className="input length courier"  
                    placeholder='write your email here' 
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <button className='nicebutton2' onClick={subscribeNow}><i class={btnClass2}></i>{btnText}</button>
                </div>
            </div>

            <div 
                className={thanksVisibility}
                style={{
                    position: "absolute",  
                    width: "100%", 
                    maxWidth: "300px", 
                    //visibility: "visible",
                    textAlign: "center"
                }}>
                    <p style={{marginBottom: "10px", fontSize: "50px", fontWeight: "bold", fontFamily: "'Caveat Brush', cursive"}}>Thank you for subscription :))</p>
            </div>
            

        </div>
        </>
    )
}


