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
import EditStramingUrl from '@/components/EditStramingUrl';



const Admin = () => {

    //show admin content afrer login
    const [showContent, setShowContent] = useState("hidden");
    const [showContentOpacity, setShowContentOpacity] = useState(0);

    //REFRESH FETCHING STATE
    const [refresh, setRefresh] = useState(false);

    //FETCHING RELEASES FROM DATABASE
    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);

    //LOADER STATE
    const [loaderState, setLoaderState] = useState(false);

    //data z databaze
    const contentCollectionRef = collection(db, "content");
    const contentCollectionRef2 = collection(db, "streamingurl");

    //GET DATA FROM DATABASE
    const getData = async () => {
    setLoaderState(true);
    try {
      const data = await getDocs(contentCollectionRef);
      const data2 = await getDocs(contentCollectionRef2);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id, 
      }));
      setMyData(filteredData);

      const filteredData2 = data2.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id, 
      }));
      setMyData2(filteredData2);

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
    <Head>
        <title>Sofa admin</title>
        <meta name="description" content="lo-fi hip hop beats, music to chill, study and work" key="desc"/>
    
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

      </Head>

        <div className={`${inter.className} adminpage`}>

            <div style={{maxWidth: "500px"}}>
                <AdminLogIn  
                    setShowContent={setShowContent} 
                    setShowContentOpacity={setShowContentOpacity} 
                    getData={getData}
                />

                <div style={{visibility: showContent, opacity: showContentOpacity, transition: "1s ease-in-out", paddingTop: "60px", marginBottom: "50px"}} >
                
                    <AddNewRelease 
                        myData={myData} 
                        refresh={refresh} 
                        setRefresh={setRefresh}
                    />

                    <EditStramingUrl 
                      myData={myData2} 
                      refresh={refresh} 
                      setRefresh={setRefresh}
                    />
                    <AdminContent 
                        myData={myData} 
                        refresh={refresh} 
                        setRefresh={setRefresh}
                    
                    />

                    <div 
                    className='adminmenu'>
                        <Link href="admin/contracts" className='linkContracts'>
                            <p>CONTRACTS</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        </>  
    )
}

export default Admin;