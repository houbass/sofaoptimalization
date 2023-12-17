import Image from "next/image";


//import emailJs
import React, { useRef, useState, useEffect } from 'react';
import emailjs, { init, send } from '@emailjs/browser';

//import platform icons
import Instagram from "./pic/icons/instagram.png";
import Spotify from "./pic/icons/spotify.png";
import Facebook from "./pic/icons/facebook.png";
import Youtube from "./pic/icons/youtube.svg";

//components
import Thanksmsg from "./Thanksmsg";
import {subscribe} from "./CreateContactApi";

const Contact = () => {

  //states
  const [errText, setErrText] = useState("");
  const [errArtist, setErrArtist] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [btnClass2, setBtnClass2] = useState("");
  const [btnText, setBtnText] = useState("submit");

  const [formVisibility, setFormVisibility] = useState("visible");
  const [thanksVisibility, setThanksVisibility] = useState("hidden");

  const [newsletter, setNewsletter] = useState(false);

  const name = useRef();
  const mail = useRef();
  const message = useRef();

  //submit function
  async function submit(e) {
    e.preventDefault()

    const emailcheck = mail.current.value.includes("@");

    console.log(emailcheck);
    const formdata = {
      artistName: name.current.value,
      email: mail.current.value,
      text: message.current.value
    }

    //go top fun
    function goTop() {
      window.scrollTo({top: 0});
    }
  
    //validattion
    if(
      name.current.value.length === 0 || 
      emailcheck === false || 
      message.current.value.length === 0
      ) {
        //artist
        if(name.current.value.length === 0){
          setErrArtist("*NAME IS MANDATORY");
        }
        if(name.current.value.length > 0){
          setErrArtist("");
        }
        //email
        if(emailcheck === false){
          setErrEmail("*EMAIL IS MANDATORY");
        }
        if(emailcheck === true){
          setErrEmail("");
        }
        //message
        if(message.current.value.length === 0){
          setErrMessage("*MESSAGE IS MANDATORY");
        }
        if(message.current.value.length > 500 ){
          setErrMessage("*MESSAGE IS TOO LONG");
        }
        if(message.current.value.length > 0 && message.current.value.length < 501){
          setErrMessage("");
        }

        console.log("ERR")
        setErrText("PLEASE REVIEW YOUR SUBMISSION AND TRY IT AGAIN")
    }
    else{
      setErrText("")
      setBtnClass2("fa fa-spinner fa-spin");
      setBtnText("");

      await emailjs.send("service_sw0l5ng", "template_myc9xzg", formdata, "B79QzheXw7xK4gIqG")
      .then((result) => {

        if(newsletter === true) {
          subscribe(mail.current.value);
        }

        name.current.value = "";
        mail.current.value = "";
        message.current.value = "";

        setErrArtist("");
        setErrEmail("");
        setErrMessage("");

        setBtnClass2("");
        setBtnText("submit");

        setErrText("");

        goTop();
        setFormVisibility("hidden");
        setThanksVisibility("visible");

          //console.log(result.text);
      }, (error) => {
          console.log(error);
          setErrArtist("");
          setErrEmail("");
          setErrMessage("");
          setBtnClass2("")
          setBtnText("submit");

          setErrText("PLEASE CHECK YOUR INTERNET CONNECTION AND TRY IT AGAIN")
      });
  }

  }

  return (
    <>
    <div style={{
      maxWidth: "1000px",
      width: "90%",
      
    }}>
    <div style={{
        //backgroundImage: `url(${backgroundPic2.src})`,  
        background: "rgba(20,20,20,0.8)",      
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 30px",
        borderRadius: "30px 30px 0 0",
        visibility: formVisibility,
        boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
    }}>
      

      <div style={{textAlign: "center"}} className="description mt brush">
        <h2>Wanna ask something? Send us a message.
        </h2>
        <br/>
      </div>

      <form className="mt" style={{ width: "100%", maxWidth: "500px"}} >
        <div className="inputRow courier">
          <input 
          ref={name}
          placeholder="Name" 
          className="input length courier" 
          />
          <p className='error'>{errArtist}</p>
        </div>

        <div className="inputRow courier">
          <input 
          placeholder="Email" 
          className="input length courier" 
          ref={mail} 
          type='email' 
          />
          <p className='error'>{errEmail}</p>
        </div>      

        <div className="inputCol mt courier">
          <textarea
          placeholder="(max 500 characters)" 
          rows="10" 
          cols="35" 
          className="textarea courier" 
          ref={message}
          />
          <p className='error'>{errMessage}</p>
        </div>

        <div className="courier"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          //background: "orange",
          gap: "10px"
        }}>
          <input onChange={() => setNewsletter(!newsletter)} type='checkbox' />
          <p>subscribe me for Sofa Lofi newsletter</p>
        </div>

        <div className="inputRow mb mt">
        <button 
          style={{opacity: "visible", width: "100px"}} 
          className="nicebutton" 
          onClick={submit} 
      >
        <i class={btnClass2}></i>
        {btnText}
      </button>
      <br/>
      

        </div>
        <br/>
        <p className='error'>{errText}</p>
      </form>


      <Thanksmsg visibility={thanksVisibility} setVisibility={setThanksVisibility} setFormVisibility={setFormVisibility}/>
      
    </div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(241, 239, 235)",
              borderRadius: "0 0 30px 30px",
              paddingTop: "5px",
              paddingBottom: "5px",
              visibility: formVisibility

              }}>
  
              <div style={{
                  width: "100%",
                  maxWidth: "300px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "0 15px"
                  }}>

                  <div className="icon">
                      <a href="https://open.spotify.com/user/3172sefla554nzu4bpuk3o3ysjme?si=99f3d22c46564509" target="_blank"><Image className="iconImg" src={Spotify} /></a>
                  </div>

                  <div className="icon">
                      <a href="https://www.youtube.com/channel/UCVDaWGsukHQo677tAfySD6g" target="_blank"><Image width={90} className="iconImg" src={Youtube} /></a>
                  </div>
  
                  <div className="icon">
                      <a href="https://www.instagram.com/sofalofi_rec/" target="_blank"><Image className="iconImg" src={Instagram} /></a>
                  </div>
  
                  <div className="icon">
                      <a href="https://www.facebook.com/sofalofirec/" target="_blank"><Image className="iconImg" src={Facebook} /></a>
                  </div>
  
              </div>
          </div>
          </div>
          </>
  );
}

export default Contact;