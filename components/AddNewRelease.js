
//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

const AddNewRelease = () => {
    
    //add new release states
    const [addArtist, setAddArtist] = useState("");
    const [addTrack, setAddTrack] = useState("");
    const [addYoutubeLink, setAddYoutubeLink] = useState("");
    const [addSpotifyLink, setSpoifyLink] = useState("");
    const [addItunesLink, setItunesLink] = useState("");
    const [addDeezerLink, setDeezerLink] = useState("");
    const [addReleaseDate, setReleaseDate] = useState("");
    const [actualIndex, setActualIndex] = useState(null); 
    const [submitButtonVisibility, setSubmitButtonVisibility] = useState("hidden");   

    //PASSING GLOBAL SETTINGS
    const {myData, refresh, setRefresh, getData } = useContext(GlobalStates);

    //NEW RELEASE
    const contentCollectionRef = collection(db, "content");
    const addNewRelease = async() => {
        try {
            await addDoc(contentCollectionRef, {
                artists: addArtist,
                trackname: addTrack,
                youtubelink: addYoutubeLink,
                spotifylink: addSpotifyLink,
                ituneslink: addItunesLink,
                deezerlink: addDeezerLink,
                releasedate: addReleaseDate,
                releaseindex: actualIndex
            });
            setRefresh(!refresh);
            //clearing inputs
            setAddArtist("");
            setAddTrack("");
            setAddYoutubeLink("");
            setSpoifyLink("");
            setItunesLink("");
            setDeezerLink("");
            setReleaseDate("");

        }catch(err) {
            console.log(err);
        }
    }

    //AUTOMATIC RELEASES INDEXING
    const getDataIndex =  () => {
        const index = myData[0]?.releaseindex;
        console.log(index);
        if(index === undefined){
            setActualIndex(1);
            console.log("yo");
        }else{
            setActualIndex(Number(index) + 1);
        }
    }

    useEffect(() => {
        getDataIndex();
    })

    //FORM RULES
    useEffect(() => {
        if(
        addArtist === "" || 
        addTrack === ""  || 
        addYoutubeLink === ""  ||
        addSpotifyLink === ""  || 
        addItunesLink === ""  || 
        addDeezerLink === ""  || 
        addReleaseDate === ""  
        ){
            console.log("EMPTY");
            setSubmitButtonVisibility("hidden");

        }else{
            setSubmitButtonVisibility("visible");
        }
    })

return (
    <>
    <div style={{marginTop: "60px"}}>
        <div className='addrelease'>
            <fieldset>
            <legend><strong>add new release</strong></legend>
            <input value={addArtist} placeholder='artists' onChange={(e)=>setAddArtist(e.target.value)}></input>
            
            <input value={addTrack} placeholder='track name' onChange={(e)=>setAddTrack(e.target.value)}></input>
            <input value={addYoutubeLink} placeholder='youtube' onChange={(e)=>setAddYoutubeLink(e.target.value)}></input>
            <input value={addSpotifyLink} placeholder='spotify' onChange={(e)=>setSpoifyLink(e.target.value)}></input>
            <input value={addItunesLink} placeholder='appleMusic' onChange={(e)=>setItunesLink(e.target.value)}></input>
            <input value={addDeezerLink} placeholder='deezer' onChange={(e)=>setDeezerLink(e.target.value)}></input>
            <input value={addReleaseDate} placeholder='year/month/day' onChange={(e)=>setReleaseDate(e.target.value)}></input>
            <div className="addreleaseconfirm">


            <p style={{fontSize: "12px"}}><strong>#{actualIndex}</strong></p>
            <button 
                onClick={addNewRelease}
                style={{visibility: submitButtonVisibility}} 
                className="custombutton"
            >submit</button>
            </div>
            </fieldset>

        </div>
    </div>

    </>
)
    
};

export default AddNewRelease;