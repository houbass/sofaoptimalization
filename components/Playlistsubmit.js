
//library
import { useForm } from "react-hook-form";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

//import emailJs
import React, { useRef, useState, useEffect } from 'react';
import emailjs, { init, send } from '@emailjs/browser';

//components
import Thanksdemo from "./Thanksdemo";

const Playlistsubmit = () => {

  //funkce react hook form (kontrola polí a atd)
  const {register, handleSubmit, watch, reset, formState: { errors }} = useForm({defaultValues: {artistName: "", email: "", text: "", track: ""}});


  //funkce na posíláni na email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_za1xlkr", "template_icltax6", form.current, "BpUJsAuZF7Y43-jj1")
    .then((result) => {
        console.log(result.text);
        formResetFun();
        thanksVisibilityFun();
        goTop();
    }, (error) => {
        console.log(error.text);
    });
  };


  //states
  const [artistNameState, setArtistNameState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [trackState, setTrackState] = useState(false);
  const [messageState, setMessageState] = useState(true);
  const [messageError, setMessageError] = useState("");
  const [opacityFun, setOpacityFun] = useState(0);
  const [pointerEventFun, setPointerEventFun] = useState("none");
  const [formVisibility, setFormVisibility] = useState("visible");
  const [thanksVisibility, setThanksVisibility] = useState("hidden");

  function thanksVisibilityFun() {
    setFormVisibility("hidden");
    setThanksVisibility("visible");
  }

  function goTop() {
    window.scrollTo({top: 0});
  }

  //artist name check
  let artistNameCheck = watch("artistName").length;
  let artistNameError = "";

  if(artistNameCheck === 0 ){
    artistNameError = "*artist name is mandatory"
  }
  if(artistNameCheck > 0 && artistNameCheck < 2){
    artistNameError = "*min length is 2"
  }
  if(artistNameCheck >= 20){
    artistNameError = "*max length is 20"
  }
  useEffect(()=>{
    if (artistNameCheck >= 2 && artistNameCheck < 20) {  
      setArtistNameState(true);
      console.log("artist true")
    }else{
      setArtistNameState(false);
      console.log("artist false")
    }
  })
  

  //email check
  let emailCheck = watch("email");
  let emailSignCheck = emailCheck.includes("@");
  let emailError = "";

  if (emailSignCheck === false) {  
    emailError = "*email is mandatory"
  }
  useEffect (() => {
    if(emailSignCheck === true){
      emailError = ""
      setEmailState(true);
      console.log("email true")
    }else{
      setEmailState(false);
    }
  })


  //track check
  let trackCheck = watch("track");
  let trackCheckLength = trackCheck.length;
  let trackSignCheck = trackCheck.includes("spotify.com/track");
  let trackError = "";

  if(trackCheckLength === 0){
    trackError = "*spotify link is mandatory";
  }
  if(trackCheckLength > 0 && trackSignCheck === false){
    trackError = "*this doesn't look like Spotify link mate"
  }
  useEffect(() => {
    if(trackSignCheck === true){
      trackError = "";
      setTrackState(true);
      console.log("track true")
    }else{
      setTrackState(false);
    }
  })


  //message check
  let messageCheck = watch("text").length;
  useEffect(() => {
    if(messageCheck >= 500){
      setMessageError("*it's too long mate");
      setMessageState(false);
      console.log("message false")
    }else{
      setMessageError("");
      setMessageState(true);
    }
  })

  //funkce pro zobrazeni buttonu
  useEffect(() => {
    if(artistNameState === true && emailState === true && messageState === true && trackState === true){
      setOpacityFun(1);
      setPointerEventFun("all");
    }else{
      setOpacityFun(0);
      setPointerEventFun("none"); 
    }
  })


  //form reset function
  const formResetFun = () => {
    reset(formValues => ({
      ...formValues,
      track: "",
      text: "",
    }))
  }


  return (
    <div style={{
        backgroundImage: `url(${backgroundPic2.src})`,        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1000px",
        width: "90%",
        padding: "30px 30px",
        borderRadius: "30px",
        visibility: formVisibility
    }}>
      
      <div className="title">
        <h1>Submit your track to our Spotify playlist</h1>
      </div>

      <div className="description mt">
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
      <form ref={form} onSubmit={sendEmail} className="form1 mt" >
        <div className="inputRow">
          <input {...register("artistName")} placeholder="Artist name" className="input length"/>
          <p className="error">{artistNameError}</p>
        </div>

        <div className="inputRow">
          <input {...register("email")} placeholder="Email" className="input length"/>
          <p className="error">{emailError}</p>
        </div>

        <div className="inputCol">
          <input {...register("track")} placeholder="Paste Spotify link to your demo" className="input"/>
          <p className="error">{trackError}</p>
        </div>        

        <div className="inputCol mt">
          <textarea {...register("text")} placeholder="Do you wanna say something? (max 500 characters)" rows="10" cols="50" className="textarea"/>
          <p className="error">{messageError}</p>
        </div>

        <div className="inputRow mb mt">
          <button 
          onClick={() => {
            console.log("PLAYLIST SUBMITED")

          }}

          style={{opacity: opacityFun, transition: "1s", pointerEvents: pointerEventFun}} 
          className="submitButt" 
          type="submit">
            submit
          </button>
        </div>
      </form>
      <Thanksdemo visibility={thanksVisibility} setVisibility={setThanksVisibility} setFormVisibility={setFormVisibility}/>
    </div>
  );
}

export default Playlistsubmit;