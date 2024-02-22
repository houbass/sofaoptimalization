import { useState } from 'react';

//next
import { Inter } from 'next/font/google'
import Head from 'next/head'

//components
import MasteringContract from '@/components/MasteringContract';
import ThirdpartyContract from '@/components/ThirdpartyContract';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Contract() {

    //states for PDF
    const [name, setName] = useState("EMPTY");
    const [artist, setArtist] = useState("EMPTY");
    const [dashgoEmail, setDashgoemail] = useState("EMPTY");
    const [paypalEmail, setPaypalemail] = useState("EMPTY");    
    const [track, setTrack] = useState("EMPTY");
    const [shareSplit, setShareSplit] = useState("EMPTY");

    //states (cursor)
    const [cursorType, setCursorType] = useState("auto");

    //share option
    function shareOption(e) {

        if(e.target.value === ""){
        setShareSplit("EMPTY")
        }

        if(e.target.value === "25%"){
        setShareSplit("Twenty-Five percent (25%)")
        }

        if(e.target.value === "50%"){
        setShareSplit("Fifty percent (50%)")
        }
    }

    return(
        <>
        <Head>
            <title>Sofa contracts</title>
            <meta name="description" content="lo-fi hip hop beats, music to chill, study and work" key="desc"/>
        
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

        </Head>
        <div style={{cursor: cursorType}} className={`${inter.className} contracts`}>
           
            <h1>Create Contracts</h1>
            <br/>
            <div className='inputs'>
                <input onChange={(e) => {setName(e.target.value)}} placeholder='full legal name'></input>
                <input onChange={(e) => {setArtist(e.target.value)}} placeholder='artist name'></input>
                <input onChange={(e) => {setDashgoemail(e.target.value)}} placeholder='dashgo email'></input>
                <input onChange={(e) => {setPaypalemail(e.target.value)}} placeholder='paypal email'></input>
                <input onChange={(e) => {setTrack(e.target.value)}} placeholder='track name'></input>
                <div className='row'>
                    <p>share:</p>
                    <select onChange={shareOption} defaultValue="">
                        <option></option> 
                        <option>25%</option>
                        <option>50%</option>
                    </select>
                </div>
            </div> 

            <div 
            className='adminmenu'
            >
                        <Link href="../admin" className='linkContracts'>
                            <p>ADMIN PANEL</p>
                        </Link>

                    </div>

            <MasteringContract name={name} artist={artist} dashgoEmail={dashgoEmail} track={track} shareSplit={shareSplit} setCursorType={setCursorType}/>
            <ThirdpartyContract name={name} artist={artist} paypalEmail={paypalEmail} track={track} shareSplit={shareSplit} setCursorType={setCursorType}/>


        </div>
        </>
    )
}