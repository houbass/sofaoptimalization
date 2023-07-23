//import emailJs
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

//components
import Thanksdemo from './Thanksdemo';

const SubmitDemo = () => {

  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [artistNameState, setArtistNameState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [trackState, setTrackState] = useState(false);
  const [messageState, setMessageState] = useState(true);
  const [messageError, setMessageError] = useState("");
  const [opacityFun, setOpacityFun] = useState(0);
  const [pointerEventFun, setPointerEventFun] = useState("none");
  const [formVisibility, setFormVisibility] = useState("visible");
  const [thanksVisibility, setThanksVisibility] = useState("hidden");
  const [artistNameError, setArtistNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [trackError, setTrackError] = useState("");
  const [btnClass2, setBtnClass2] = useState("");
  const [btnText, setBtnText] = useState("send");

    //form data
    const formdata = {
      artistName: name,
      email: email,
      track: link,
      text: message
    }

    //send form by email.js
    async function sendEmail(e) {
      e.preventDefault();
      //setButtonLoading("btnAnimation");
      setBtnClass2("fa fa-spinner fa-spin")
      setBtnText("");
      await emailjs.send("service_za1xlkr", "template_mdryrxo", formdata, "BpUJsAuZF7Y43-jj1")
      .then((result) => {
          //console.log(result.text);
          goTop();
          setFormVisibility("hidden");
          setThanksVisibility("visible");
          setBtnClass2("")
          setBtnText("send");
      }, (error) => {
          console.log(error.text);
      });
      
    };

  //artist name check
  function artistcheck(e) {
    const artistNameCheck = e.target.value.length;
    setName(e.target.value);

    if(artistNameCheck === 0 ){
      setArtistNameError("*artist name is mandatory");
    }
    if(artistNameCheck > 0 && artistNameCheck < 2){
      setArtistNameError("*min length is 2");
    }
    if(artistNameCheck > 20){
      setArtistNameError("*max length is 20");
    }
    if (artistNameCheck >= 2 && artistNameCheck <= 20) {  
      setArtistNameState(true);
      setArtistNameError("");
    }else{
      setArtistNameState(false);
    }
  }

  //email check
  function emailcheck(e) {
    const emailCheck = e.target.value;
    const emailSignCheck = emailCheck.includes("@");
    setEmail(emailCheck);

    if (emailSignCheck === false) {  
      setEmailError("*email is mandatory");
      setEmailState(false);
    }
    if(emailSignCheck === true){
      setEmailError("");
      setEmailState(true);
    }else{
      setEmailState(false);
    }
  }
  
  //track check
  function trackcheck(e) {
    const trackCheck = e.target.value;
    const trackCheckLength = trackCheck.length;
    const trackSignCheck = trackCheck.includes("soundcloud.com");
    setLink(trackCheck)

    if(trackCheckLength === 0){
      setTrackError("*soundcloud link is mandatory");
      setTrackState(false);
    }
    if(trackCheckLength > 0 && trackSignCheck === false){
      setTrackError("*this doesn't look like Soundcloud link mate");
      setTrackState(false);
    }

    if(trackSignCheck === true){
      setTrackError("");
      setTrackState(true);
    }else{
      setTrackState(false);
    }
  }

  //message check
  function messagecheck(e) {
    const messageCheck = e.target.value.length
    setMessage(e.target.value)

    if(messageCheck >= 500){
      setMessageError("*it's too long mate");
      setMessageState(false);
    }else{
      setMessageError("");
      setMessageState(true);
    }
  }

  //funkce pro zobrazeni buttonu
  useEffect(() => {
    if(artistNameState === true && emailState === true && messageState === true && trackState === true){
      setOpacityFun(1);
      setPointerEventFun("all");
    }else{
      setOpacityFun(0);
      setPointerEventFun("none"); 
    }
  }, [artistNameState, emailState, messageState, trackState]);


  function goTop() {
    window.scrollTo({top: 0});
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
      
      <div className="title brush" >
        <h1>Submit your demo</h1>
      </div>

      <div className="mainpageP mt">
        <p>This form is used to submit your demo to label consideration. 
            Please make sure that you respect the conditions listed below before submitting otherwise it will be automatically declined.
        </p>
        <br></br>
        <div className="list">
            <ul >
                <li>Be lofi hip hop (better check our playlist to get a vibe)</li>
                <li>Be instrumental (without vocals)</li>
                <li>Be unreleased</li>
                <li>Be finished</li>
                <li>Submit maximum one or two tracks at once (we are mainly looking for singles)</li>
                <li>Only private Soundcloud links are allowed</li>
            </ul>
        </div>
        <br></br>
        <p>Once you submit your track, we will listen as soon as possible and reply back within a one week (after the date you submitted it).</p>
      </div>
        <br></br>
      <form onSubmit={sendEmail} className="mt" style={{ width: "100%", maxWidth: "500px"}} >
        <div className="inputRow courier">
          <input 
          placeholder="Artist name" 
          className="input length courier" 
          onChange={artistcheck}
          />
          <p className="error">{artistNameError}</p>
        </div>

        <div className="inputRow courier">
          <input 
          placeholder="Email" 
          className="input length courier" 
          onChange={emailcheck}
          />
          <p className="error">{emailError}</p>
        </div>

        <div className="inputCol courier">
          <input
          placeholder="Paste Soundcloud link to your demo" 
          className="input courier" 
          onChange={trackcheck} 
          />
          <p className="error">{trackError}</p>
        </div>        

        <div className="inputCol mt courier">
          <textarea
          placeholder="Do you wanna say something? (max 500 characters)" 
          rows="10" 
          cols="35" 
          className="textarea courier"
          onChange={messagecheck}
          />
          <p className="error">{messageError}</p>
        </div>

        <div className="inputRow mb mt">
          <button 
          style={{opacity: opacityFun, pointerEvents: pointerEventFun, width: "90px"}} 
          className="nicebutton"
          type="submit">
            <i class={btnClass2}></i>
            {btnText}
          </button>
        </div>
      </form>
      <Thanksdemo visibility={thanksVisibility} setVisibility={setThanksVisibility} setFormVisibility={setFormVisibility}/>
    </div>
  );
}

export default SubmitDemo;

