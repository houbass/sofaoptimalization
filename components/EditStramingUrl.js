
import { useEffect, useState } from "react";

//firebase database
import { db } from "config/firebase";
import { updateDoc, doc } from "firebase/firestore";

const EditStreamingUrl = ({ myData, refresh, setRefresh }) => {

    const [data, setData] = useState([]);

    //UPDATE TABLE
    //VISIBILITY
    const [updateTableVisibility, setUpdateTableVisibility] = useState("hidden");
    const [updateTableOpacity, setUpdateTableOpacity] = useState(0);

    //UPDATE STATES
    const [updateUrl, setUpdateUrl] = useState("");

    const databaseUpdateObj = {
        url: updateUrl,
    }

    //UPDATES
    const updateTableHanler = (data) => {
        //UPDATE STATES
        setUpdateUrl(myData[0].url);

        //UPDATE TABLE VISIBILITY
        setUpdateTableVisibility("visible");
        setUpdateTableOpacity(1);
    }

    //UPDATE RELEASE DATABASE
    const updateRelease = async () => {
        try {
            await updateDoc(doc(db, "streamingurl", "url"), databaseUpdateObj);
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
    
    useEffect(() => {
        setData(myData);
    })

    return(
        <div className='addrelease'>
            <div style={{visibility: updateTableVisibility, opacity: updateTableOpacity}} className="updatewindow">
                <div className="updateform">
                    <p style={{fontSize: "12px", fontWeight: "bold", paddingBottom: "5px"}}>edit your streaming url</p>
                    <div className="updateinputsbox">
                        <input  value={updateUrl} onChange={(e)=>setUpdateUrl(e.target.value)}></input>
                    </div>
                    <br/>
                    <button onClick={updateRelease} class="material-symbols-outlined">check</button>
                    <button onClick={cancelUpdate} class="material-symbols-outlined">close</button>
                </div>
            </div>

            <fieldset style={{width: "100%", marginTop: "15px"}}>
                <legend style={{color: "white", padding: "5px"}}><strong>edit streaming url</strong></legend>
                <div className='admincontent'>
                    <div style={{display: "flex"}}>
                        <h5>{myData[0]?.url}</h5>
                    </div>
                    <div style={{display: "flex"}}>
                        <button onClick={() => updateTableHanler(data)} class="material-symbols-outlined">edit_square</button>
                    </div>
                </div>
            </fieldset>
    </div>
    )
}

export default EditStreamingUrl;