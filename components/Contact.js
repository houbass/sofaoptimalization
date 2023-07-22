import Image from "next/image";

//library
import { useForm } from "react-hook-form";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

//import emailJs
import React, { useRef, useState, useEffect } from 'react';
import emailjs, { init, send } from '@emailjs/browser';

//import platform icons
import Instagram from "./pic/icons/instagram.png";
import Spotify from "./pic/icons/spotify.png";
import Facebook from "./pic/icons/facebook.png";

//components
import Thanksmsg from "./Thanksmsg";

const Contact = () => {

  //funkce react hook form (kontrola polí a atd)
  const {register, handleSubmit, watch, reset, formState: { errors }} = useForm({defaultValues: {artistName: "", email: "", text: "", track: ""}});

  //states
  const [artistNameState, setArtistNameState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [messageState, setMessageState] = useState(true);
  const [messageError, setMessageError] = useState("");
  const [opacityFun, setOpacityFun] = useState(0);
  const [pointerEventFun, setPointerEventFun] = useState("none");
  const [formVisibility, setFormVisibility] = useState("visible");
  const [thanksVisibility, setThanksVisibility] = useState("hidden");
  const [artistNameError, setArtistNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [btnClass2, setBtnClass2] = useState("");
  const [btnText, setBtnText] = useState("send")

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
    //setButtonLoading("btnAnimation");
    setBtnClass2("fa fa-spinner fa-spin")
    setBtnText("");
    await emailjs.sendForm("service_sw0l5ng", "template_myc9xzg", form.current, "B79QzheXw7xK4gIqG")
    .then((result) => {
        formResetFun();
        thanksVisibilityFun();
        goTop();
        //setButtonLoading("");
        setBtnClass2("")
        setBtnText("send");
    }, (error) => {
        console.log(error.text);
    });
  };  

  //artist name check
  const artistNameCheck = watch("artistName").length;

  useEffect(() => {
    if(artistNameCheck === 0 ){
      setArtistNameError("*name is mandatory");
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



  //message check
  const messageCheck = watch("text").length;

  useEffect(() => {
    if(messageCheck > 500){
      setMessageError("*it's too long mate");
      setMessageState(false);
    }
    if(messageCheck <= 0){
      setMessageError("*message is mandatory");
      setMessageState(false);
    }
    else{
      setMessageError("");
      setMessageState(true);
    }
  }, [messageCheck]);

  //funkce pro zobrazeni buttonu
  useEffect(() => {
    if(artistNameState === true && emailState === true && messageState === true ){
      setOpacityFun(1);
      setPointerEventFun("all");
    }else{
      setOpacityFun(0);
      setPointerEventFun("none"); 
    }
  }, [artistNameState, emailState, messageState]);


  //form reset function
  const formResetFun = () => {
    reset(formValues => ({
      ...formValues,
      track: "",
      text: "",
    }))
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
        <br></br>

      </div>
        <br></br>
      <form ref={form} onSubmit={sendEmail} className="mt courier" style={{ width: "100%", maxWidth: "500px"}} >
        <div className="inputRow">
          <input {...register("artistName")} placeholder="Your name" className="input length courier"/>
          <p className="error">{artistNameError}</p>
        </div>

        <div className="inputRow">
          <input {...register("email")} placeholder="Email" className="input length courier"/>
          <p className="error">{emailError}</p>
        </div>     

        <div className="inputCol mt">
          <textarea {...register("text")} placeholder="Do you wanna say something? (max 500 characters)" rows="10" cols="35" className="textarea courier"/>
          <p className="error">{messageError}</p>
        </div>

        <div className="inputRow mb mt">
          <button 
          onClick={() => {
            console.log("PLAYLIST SUBMITED")

          }}

          style={{opacity: opacityFun, transition: "1s", pointerEvents: pointerEventFun, width: "90px"}} 
          className="nicebutton"
          type="submit">
            <i class={btnClass2}></i>
            {btnText}
          </button>
        </div>
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
                      <a href="https://www.instagram.com/sofalofi_rec/" target="_blank"><Image className="iconImg" src={Instagram} /></a>
                  </div>
  
                  <div className="icon">
                      <a href="https://open.spotify.com/user/3172sefla554nzu4bpuk3o3ysjme?si=99f3d22c46564509" target="_blank"><Image className="iconImg" src={Spotify} /></a>
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