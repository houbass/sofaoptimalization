//import emailJs
import React, { useState, useEffect } from 'react';

//components
import Thanksdemo from './Thanksdemo';

const Submittest = () => {


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
        visibility: "visible",
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
      <form className="mt" style={{ width: "100%", maxWidth: "500px"}} >
        <div className="inputRow courier">
          <input 
          placeholder="Artist name" 
          className="input length courier" 
          />
        </div>

        <div className="inputRow courier">
          <input 
          placeholder="Email" 
          className="input length courier" 
          />

        </div>

        <div className="inputCol courier">
          <input
          placeholder="Paste Soundcloud link to your demo" 
          className="input courier" 
          />

        </div>        

        <div className="inputCol mt courier">
          <textarea
          placeholder="Do you wanna say something? (max 500 characters)" 
          rows="10" 
          cols="35" 
          className="textarea courier"

          />

        </div>

        <div className="inputRow mb mt">

        </div>
      </form>
      <button 
          style={{opacity: "visible", width: "90px"}} 
          className="nicebutton"
          >
            submit
          </button>
    </div>
  );
}

export default Submittest;

