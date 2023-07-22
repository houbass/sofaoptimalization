import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useContext, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

//FIREBASE AUTH
import { auth, googleProvider } from "config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

//components
//import AdminLogIn from '@/components/AdminLogIn';
import AdminLogIn from '@/components/AdminLogIn';
import AddNewRelease from '@/components/AddNewRelease';
import AdminContent from '@/components/AdminContent';



const Admin = () => {

    //show admin content afrer login
    const [showContent, setShowContent] = useState("hidden");
    const [showContentOpacity, setShowContentOpacity] = useState(0);

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
    }, [myData]);



    return(
      
<>

        <div className={`${inter.className} adminpage`}>

            <div style={{maxWidth: "500px"}}>
                <AdminLogIn  
                    setShowContent={setShowContent} 
                    setShowContentOpacity={setShowContentOpacity} 
                    getData={getData}
                />

                <br/>
                <div style={{visibility: showContent, opacity: showContentOpacity, transition: "1s ease-in-out"}} >
                
                    <AddNewRelease 
                        myData={myData} 
                        refresh={refresh} 
                        setRefresh={setRefresh}
                    />
                    <AdminContent 
                        myData={myData} 
                        refresh={refresh} 
                        setRefresh={setRefresh}
                    
                    />

                    <div 
                    style={{
                        position: "absolute",
                        top: "100px",
                        left: "0px",
                        background: "white",
                        padding: "10px",
                        borderRadius: "0 10px 10px 0"
                    }}>
                        <Link href="admin/contracts" className='linkContracts'>
                            <p>CONTRACTS</p>
                        </Link>
                        <br/>
                        <Link href="admin/titles" className='linkContracts'>
                            <p>TITLES</p>
                        </Link>
                    </div>

                </div>
            </div>


            <br/><br/><br/><br/><br/><br/><br/>
        </div>
        </>  
    )
}

export default Admin;