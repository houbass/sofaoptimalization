import { useContext, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Test() {

    const [btnClass, setBtnClass] = useState("");

    const [btnClass2, setBtnClass2] = useState("");
    const [btnText, setBtnText] = useState("CLICK TO SEND")

  return (
    <>


    <div
    style={{
        color: "white",
        paddingTop: "80px"
    }}>

        <h1>button test</h1>
        <br />
        <button 
        className={"nicebutton" + " " + btnClass} 
        onClick={() => {setBtnClass("btnAnimation")}}
        >
            TEST BUTTON
        </button>

        <button 
        class="buttonload"
        onClick={() => {
          setBtnClass2("fa fa-spinner fa-spin");
          setBtnText("");
        }}
        >
        <i class={btnClass2}></i>
            {btnText}
        </button>

      </div>
    </>
  )
}
