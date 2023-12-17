//import emailJs
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

//components
import Thanksdemo from './Thanksdemo';
import {subscribe} from "./CreateContactApi";

const Playlistsubmit = () => {

  const [errText, setErrText] = useState("");
  const [errArtist, setErrArtist] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errLink, setErrLink] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [btnClass2, setBtnClass2] = useState("");
  const [btnText, setBtnText] = useState("submit");

  const [formVisibility, setFormVisibility] = useState("visible");
  const [thanksVisibility, setThanksVisibility] = useState("hidden");

  const [newsletter, setNewsletter] = useState(false)

  const name = useRef();
  const mail = useRef();
  const link = useRef();
  const message = useRef();

  //submit function
  async function submit(e) {
    e.preventDefault()

    const emailcheck = mail.current.value.includes("@");
    const soundcloud = link.current.value.includes("spotify.com");

    const formdata = {
      artistName: name.current.value,
      email: mail.current.value,
      track: link.current.value,
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
      soundcloud === false || 
      message.current.value.length > 500
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
        //link
        if(soundcloud === false){
          setErrLink("*SPOTIFY LINK IS MANDATORY");
        }
        if(soundcloud === true){
          setErrLink("");
        }
        //message
        if(message.current.value.length > 500 ){
          setErrMessage("*MESSAGE IS TOO LONG");
        }
        if(message.current.value.length === 0 || message.current.value.length < 501){
          setErrMessage("");
        }

        console.log("ERR")
        setErrText("PLEASE REVIEW YOUR SUBMISSION AND TRY IT AGAIN")
    }
    else{
      setErrText("")
      setBtnClass2("fa fa-spinner fa-spin");
      setBtnText("");

      await emailjs.send("service_za1xlkr", "template_icltax6", formdata, "BpUJsAuZF7Y43-jj1")
      .then((result) => {

        if(newsletter === true) {
          subscribe(mail.current.value);
        }


        name.current.value = "";
        mail.current.value = "";
        link.current.value = "";
        message.current.value = "";

        setErrArtist("");
        setErrEmail("");
        setErrLink("");
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
          setErrLink("");
          setErrMessage("");
          setBtnClass2("")
          setBtnText("submit");

          setErrText("PLEASE CHECK YOUR INTERNET CONNECTION AND TRY IT AGAIN")
      });
  }


  }



  return (
    <div style={{
        //backgroundImage: `url(${backgroundPic2.src})`,    
        background: "rgba(20,20,20,0.8)",  
        boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        alignItems: "center",
        maxWidth: "1000px",
        width: "90%",
        padding: "30px 30px",
        borderRadius: "30px",
        visibility: formVisibility,
    }}>
      
      <div className="title brush">
        <h1>Submit your track to our Spotify playlist</h1>
      </div>

      <div className="mainpageP mt">
        <p>This form is used to submit music to our Spotify playlist. 
          Please make sure that you respect the conditions listed below before submitting otherwise it will be automatically declined.
        </p>
        <br></br>
        <div className="list">
            <ul >
                <li>Be lofi hip hop (better check our playlist to get a vibe)</li>
                <li>Be instrumental (without vocals)</li>
                <li>Be released on Spotify</li>
                <li>Be finished</li>
                <li>Submit maximum one or two tracks at once (only one track will be added)</li>
                <li>Only Spotify links are allowed</li>
            </ul>
        </div>
        <br></br>
        <p>Once you submit your track, we will listen as soon as possible and reply back within a one week (after the date you submitted it).</p>
      </div>
        <br></br>
      <form className="mt" style={{ width: "100%", maxWidth: "500px"}} >
        <div className="inputRow courier">
          <input 
          ref={name}
          placeholder="Artist name" 
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

        <div className="inputCol courier">
          <input
          placeholder="Spotify link" 
          className="input courier" 
          ref={link}
          />
          <p className='error'>{errLink}</p>
        </div>        

        <div className="inputCol mt courier">
          <textarea
          placeholder="Do you wanna say something? (max 500 characters)" 
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
      <Thanksdemo visibility={thanksVisibility} setVisibility={setThanksVisibility} setFormVisibility={setFormVisibility}/>
    </div>
  );
}

export default Playlistsubmit;

