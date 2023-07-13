import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

//FIREBASE AUTH
import { auth, googleProvider } from "config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//components
//import AdminLogIn from '@/components/AdminLogIn';
import AddNewRelease from '@/components/AddNewRelease';
import AdminContent from '@/components/AdminContent';
import { useCallback, useContext, useEffect, useState } from 'react';

const AdminLogIn = ({ setShowContent, setShowContentOpacity }) => {

    //ERR
    const [errorState, setErrorState] = useState("");

    //PASSING GLOBAL SETTINGS
    const { myData, loaderState, getData } = useContext(GlobalStates);

    //LOGIN SAVE
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [logOutBtnVisibility, setLogOutBtnVisibility] = useState("hidden");
    const [logInState, setLogInState] = useState(false);
    const [logInState2, setLogInState2] = useState(false);

    //INFO LOGIN TEXT
    const [errorText, setErrorText] = useState("");

    //SHOW PASSWORD
    const [showPasswordState, setShowPasswordState] = useState("password");
    const [showBtnText, setShowBtnText] = useState("show");
    const [showToggler, setShowToggler] = useState(false);

    //SHOW LOGIN TABLE
    const [showTable, setSHowTable] = useState("visible");
    const [showTableOpacity, setShowTableOpacity] = useState(1);

    const showPassword = () => {
        if(showToggler === false){
            setShowPasswordState("text");
            setShowBtnText("hide");
            setShowToggler(true);
        }else{
            setShowPasswordState("password");
            setShowBtnText("show");
            setShowToggler(false);   
        }
    }
    
    //email sign in funkce s error printem
    const logIn = async () => {

        try {
            await signInWithEmailAndPassword(auth, name, password);
            setLogInState(!logInState);
            setLogInState2(!logInState2);

            setSHowTable("hidden");
            setShowTableOpacity(0);
            setLogOutBtnVisibility("visible");
            setShowContent("visible");
            setShowContentOpacity(1);
        } catch (err) {
            console.error(err);
            setLogInState2(!logInState2);

            const invalidEmail = String(err).includes("invalid-email");
            const userNotFound = String(err).includes("user-not-found");
            const networkError = String(err).includes("network-request-failed");
            const missingPassword = String(err).includes("missing-password");
            const invalidPassword = String(err).includes("wrong-password");

            //setErrorState(err);
            if(networkError === true){
                setErrorText("NETWORK ERROR");
            }if(invalidEmail === true){
                setErrorText("INVALID EMAIL");
            }if(userNotFound === true){
                setErrorText("USER NOT FOUND");
            }if(missingPassword === true){
                setErrorText("MISSING PASSWORD");
            }if(invalidPassword === true){
                setErrorText("WRONG PASSWORD");
            }    
        }

    };

    //logout funkce
    const logOut = async () => {
        setSHowTable("visible");
        setShowTableOpacity(1);
        setLogOutBtnVisibility("hidden");
        setShowContent("hidden");
        setShowContentOpacity(0);
        try {
            await signOut(auth);
            setLogInState(!logInState);
            setLogInState2(!logInState2);
            setMyData([]);
            

        } catch (err) {
            console.error(err);
            setLogInState2(!logInState2);
        }
    };

    //rozhodovani podle login
    useEffect(() => {
        if(auth?.currentUser?.email === "sofalofi.rec@gmail.com"){
            setLogOutBtnVisibility("visible");
            setSHowTable("hidden");
            setShowTableOpacity(0);
            setShowContent("visible");
            setShowContentOpacity(1);
            
        }else{
            setLogOutBtnVisibility("hidden");
            setSHowTable("visible");
            setShowTableOpacity(1);
            setShowContent("hidden");
            setShowContentOpacity(0);
        }
        setLogInState2(!logInState2);

    },[getData])

    //kontrole kdo je nalogován (?) znamená že když nejsou data tak skipne
        console.log(auth?.currentUser?.email + " is logged in");
    return(
        <div className='adminpage'>
        <div className='logoutbutton'>
            <button 
                onClick={logOut}
                style={{visibility: logOutBtnVisibility}}
                className='custombutton'
            >logout</button>
        </div>
        <div className='adminlogin' style={{visibility: showTable, opacity: showTableOpacity}}>
                        
            <h2>ADMIN PAGE</h2>

            <div className={styles.description}>
                <p>for admin using only</p>
            </div>
            <div>
            <div className={`${styles.login}`} >

                <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="email" 
                    value={name}
                ></input>

                <div style={{display: "flex", justifyContent: "space-between"}}>

                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPasswordState} 
                        placeholder="password" 
                        value={password}
                    ></input>

                    <button 
                        onClick={showPassword} 
                        className='custombutton'
                    >{showBtnText}</button>

                </div>
                <button 
                    onClick={logIn} 
                    style={{ marginTop: "5px"}} 
                    className='custombutton'
                >login</button>
                <p style={{fontWeight: "bold"}}>{errorText}</p>
            </div>
            </div>
            </div>
            </div>
    )
}

export default AdminLogIn;