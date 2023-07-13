import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

//FIREBASE AUTH
import { auth, googleProvider } from "config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//components
//import AdminLogIn from '@/components/AdminLogIn';
import AdminLogIn from '@/components/AdminLogIn';
import AddNewRelease from '@/components/AddNewRelease';
import AdminContent from '@/components/AdminContent';
import { useCallback, useContext, useEffect, useState } from 'react';


const Admin = () => {

    const [showContent, setShowContent] = useState("hidden");
    const [showContentOpacity, setShowContentOpacity] = useState(0);

    return(
      
<>

        <div className={`${inter.className} adminpage`}>

            <div style={{maxWidth: "500px"}}>
                <AdminLogIn  
                    setShowContent={setShowContent} 
                    setShowContentOpacity={setShowContentOpacity}
                />

                <br/>
                <div style={{visibility: showContent, opacity: showContentOpacity, transition: "1s ease-in-out"}} >
                
                    <AddNewRelease />
                    <AdminContent/>
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