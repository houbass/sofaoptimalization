
//library
import { useForm } from "react-hook-form";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

//import emailJs
import React, { useRef, useState, useEffect, useContext } from 'react';
import emailjs, { init, send } from '@emailjs/browser';

//components
import Thanksdemo from "./Thanksdemo";

const Playlistsubmit = () => {

  //funkce react hook form (kontrola polí a atd)
  const {register, handleSubmit, watch, reset, formState: { errors }} = useForm({defaultValues: {artistName: "", email: "", text: "", track: ""}});

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
  const [artistNameError, setArtistNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [trackError, setTrackError] = useState("");

  const [buttonLoading, setButtonLoading] = useState("")

  function thanksVisibilityFun() {
    setFormVisibility("hidden");
    setThanksVisibility("visible");
  }

  function goTop() {
    window.scrollTo({top: 0});
  }

  //funkce na posíláni na email
  const form = useRef();
  const sendEmail = async(e) => {
    e.preventDefault();
    setButtonLoading("btnAnimation");
    await emailjs.sendForm("service_za1xlkr", "template_icltax6", form.current, "BpUJsAuZF7Y43-jj1")
    .then((result) => {
        formResetFun();
        thanksVisibilityFun();
        goTop();
        setButtonLoading("");
    }, (error) => {
        console.log(error.text);
    });
  };  

  //artist name check
  const artistNameCheck = watch("artistName").length;

  useEffect(() => {
    if(artistNameCheck === 0 ){
      setArtistNameError("*artist name is mandatory");
    }
    if(artistNameCheck > 0 && artistNameCheck < 2){
      setArtistNameError("*min length is 2");
    }
    if(artistNameCheck >= 20){
      setArtistNameError("*max length is 20");
    }
  }, [artistNameCheck]);

  useEffect(()=>{
    if (artistNameCheck >= 2 && artistNameCheck <= 20) {  
      setArtistNameState(true);
      setArtistNameError("");
    }else{
      setArtistNameState(false);
    }
  }, [artistNameCheck]);
  

  //email check
  const emailCheck = watch("email");
  const emailSignCheck = emailCheck.includes("@");

  useEffect(() => {
    if (emailSignCheck === false) {  
      setEmailError("*email is mandatory");
    }
  }, [emailCheck])

  useEffect (() => {
    if(emailSignCheck === true){
      setEmailError("");
      setEmailState(true);
    }else{
      setEmailState(false);
    }
  }, [emailCheck]);


  //track check
  const trackCheck = watch("track");
  const trackCheckLength = trackCheck.length;
  const trackSignCheck = trackCheck.includes("spotify.com");

  useEffect(() => {
    if(trackCheckLength === 0){
      setTrackError("*spotify link is mandatory");
    }
    if(trackCheckLength > 0 && trackSignCheck === false){
      setTrackError("*this doesn't look like Spotify link mate");
    }
  }, [trackCheck]);

  useEffect(() => {
    if(trackSignCheck === true){
      setTrackError("");
      setTrackState(true);
    }else{
      setTrackState(false);
    }
  }, [trackCheck]);


  //message check
  const messageCheck = watch("text").length;

  useEffect(() => {
    if(messageCheck > 500){
      setMessageError("*it's too long mate");
      setMessageState(false);
    }else{
      setMessageError("");
      setMessageState(true);
    }
  }, [messageCheck]);

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
      <form ref={form} onSubmit={sendEmail} className="mt" style={{ width: "100%", maxWidth: "500px"}} >
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
          <textarea {...register("text")} placeholder="Do you wanna say something? (max 500 characters)" rows="10" cols="35" className="textarea"/>
          <p className="error">{messageError}</p>
        </div>

        <div className="inputRow mb mt">
          <button 
          onClick={() => {
            console.log("PLAYLIST SUBMITED")

          }}

          style={{opacity: opacityFun, transition: "1s", pointerEvents: pointerEventFun}} 
          className={"nicebutton" + " " + buttonLoading} 
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