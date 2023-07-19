import { useContext, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Test() {

    const [btnClass, setBtnClass] = useState("");

    

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

      </div>
    </>
  )
}
