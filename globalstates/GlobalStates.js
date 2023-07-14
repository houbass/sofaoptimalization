
import { createContext, useEffect, useState } from "react";

//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";


export const GlobalStates = createContext();
export const GlobalStatesProvider = ({ children }) => {

    //MAIN DOC WIDTH
    const [mainWidth, setMainWidth] = useState(null);

    //REFRESH FETCHING STATE
    const [refresh, setRefresh] = useState(false);

    //FETCHING RELEASES FROM DATABASE
    //definice collekce databaze
    const [myData, setMyData] = useState([]);

    //LOADER STATE
    const [loaderState, setLoaderState] = useState(false);

    //data z databaze
    const contentCollectionRef = collection(db, "content");

    //GET DATA FROM DATABASE
    const getData = async () => {
    setLoaderState(true);
    try {
      const data = await getDocs(contentCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id, 
      }));
      setMyData(filteredData);
      setLoaderState(false);
    } 
    catch (err) {
      console.error(err);
    }

    };

    const sorting = () => {
      //SORT DATA BY RELEASEINDEX
      myData.sort((a,b)=>{return a.releaseindex - b.releaseindex});
      myData.reverse();
    }

    //update data list
    useEffect(() => {
        getData();
    }, [refresh]);



    //SORT MY DATA
    useEffect(() => {
      sorting();
    });


    return (
        <GlobalStates.Provider value={{ myData, refresh, setRefresh, loaderState, getData, mainWidth, setMainWidth }}>
            {children}
        </GlobalStates.Provider>
    );
};