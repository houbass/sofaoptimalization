import Head from 'next/head'
import { useContext, useEffect, useState } from "react";

//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

const AdminContent = () => {

    const { getData, myData, refresh, setRefresh } = useContext(GlobalStates);
    const [data, setData] = useState([]);

    //UPDATE TABLE
    //VISIBILITY
    const [updateTableVisibility, setUpdateTableVisibility] = useState("hidden");
    const [updateTableOpacity, setUpdateTableOpacity] = useState(0);
    const [deleteTableVisibility, setDeleteTableVisibility] = useState("hidden");
    const [deleteTableOpacity, setDeleteTableOpacity] = useState(0);
    //UPDATE STATES
    const [updateDataId, setUpdateDataId] = useState("");
    const [updateArtist, setUpdateArtist] = useState("");
    const [updateTrack, setUpdateTrack] = useState("");
    const [updateYoutube, setUpdateYoutube] = useState(""); 
    const [updateSpotify, setUpdateSpotify] = useState("");    
    const [updateApple, setUpdateApple] = useState("");  
    const [updateDeezer, setUpdateDeezer] = useState("");   
    const [updateReleasedate, setUpdateReleasedate] = useState(""); 
    const [updateReleaseIndex, setUpdateReleaseIndex] = useState(""); 

    const [updateTableTitle, setUpdateTableTitle] = useState("");

    const databaseUpdateObj = {
        artists: updateArtist,
        trackname: updateTrack,
        youtubelink: updateYoutube,
        spotifylink: updateSpotify,
        ituneslink: updateApple,
        deezerlink: updateDeezer,
        releasedate: updateReleasedate,
        releaseindex: updateReleaseIndex
    }

    //UPDATES
    const updateTableHanler = (data) => {
        //UPDATE STATES
        setUpdateDataId(data.id);
        setUpdateArtist(data.artists);
        setUpdateTrack(data.trackname);
        setUpdateYoutube(data.youtubelink);
        setUpdateSpotify(data.spotifylink);
        setUpdateApple(data.ituneslink);
        setUpdateDeezer(data.deezerlink);
        setUpdateReleasedate(data.releasedate);
        setUpdateReleaseIndex(data.releaseindex);

        //UPDATE TABLE VISIBILITY
        setUpdateTableVisibility("visible");
        setUpdateTableOpacity(1);
        setUpdateTableTitle("#" + data.releaseindex + " | " + data.artists + " - " + data.trackname)
    }

    //DELETE RELEASE
    const deleteReleaseHandler = (data) => {
        //DELETE STATES
        setUpdateDataId(data.id);

        //DELETE TABLE VISIBILITY
        setDeleteTableVisibility("visible");
        setDeleteTableOpacity(1);

    }
    //cancel delete release
    const cancelDelete = () => {
        setDeleteTableVisibility("hidden");
        setDeleteTableOpacity(0);
    }


    //UPDATE RELEASE DATABASE
    const updateRelease = async () => {
        try {
            await updateDoc(doc(db, "content", updateDataId), databaseUpdateObj);
            setRefresh(!refresh);
            setUpdateTableVisibility("hidden");
            setUpdateTableOpacity(0);
        } catch(err) {
        console.error(err);
        }
        
    };

    //CANCEL UPDATE
    const cancelUpdate = () => {
        setUpdateTableVisibility("hidden");
        setUpdateTableOpacity(0);
    }

    //DELETE RELEASE
    const deleteRelease = async (id) => {
        try {
            await deleteDoc(doc(db, "content", id));
            setDeleteTableVisibility("hidden");
            setDeleteTableOpacity(0);
            setRefresh(!refresh);
        } catch(err) {
        console.error(err);
        }
    };
    
    useEffect(() => {
        setData(myData);
    })

    return(

        
        <div className='admincontentpage'>
            <div style={{visibility: updateTableVisibility, opacity: updateTableOpacity}} className="updatewindow">
                <div className="updateform">
                    <p style={{fontSize: "12px", fontWeight: "bold", paddingBottom: "5px"}}>{updateTableTitle}</p>
                    <div className="updateinputsbox">
                        <input value={updateArtist} onChange={(e)=>setUpdateArtist(e.target.value)}></input>
                        <input value={updateTrack} onChange={(e)=>setUpdateTrack(e.target.value)}></input>
                        <input value={updateYoutube} onChange={(e)=>setUpdateYoutube(e.target.value)}></input>
                        <input value={updateSpotify} onChange={(e)=>setUpdateSpotify(e.target.value)}></input>
                        <input value={updateApple} onChange={(e)=>setUpdateApple(e.target.value)}></input>
                        <input value={updateDeezer} onChange={(e)=>setUpdateDeezer(e.target.value)}></input>
                        <input value={updateReleasedate} onChange={(e)=>setUpdateReleasedate(e.target.value)}></input>
                        <input value={updateReleaseIndex} onChange={(e)=>setUpdateReleaseIndex(e.target.value)}></input>
                    </div>
                    <br/>
                    <button onClick={updateRelease} class="material-symbols-outlined">check</button>
                    <button onClick={cancelUpdate} class="material-symbols-outlined">close</button>
                </div>
            </div>

            <div style={{visibility: deleteTableVisibility, opacity: deleteTableOpacity}} className="updatewindow">
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", background: "rgb(255, 72, 103)", padding: "5px"}}>
                    <h3>Are You Sure? |</h3>
                    <button onClick={() => deleteRelease(updateDataId)} class="material-symbols-outlined">check</button>
                    <button onClick={cancelDelete} class="material-symbols-outlined">close</button>
                </div>
            </div>

            {data.map((data) => (
                <div className='admincontent'>
                    <div style={{display: "flex"}}>
                        <h5>#{data.releaseindex}| {data.artists} - {data.trackname}</h5>
                    </div>
                    <div style={{display: "flex"}}>
                        <button onClick={() => updateTableHanler(data)} class="material-symbols-outlined">edit_square</button>
                        <button onClick={() => deleteReleaseHandler(data)} class="material-symbols-outlined">delete</button>
                    </div>
                </div>
            ))}
    </div>
    )
}

export default AdminContent;