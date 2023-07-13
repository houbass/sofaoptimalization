import Link from "next/link";
import styles from '@/styles/Home.module.css'

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'
import { useContext, useEffect, useState } from "react";
import { useScroll } from "framer-motion";



//top navbar
const Navbar = () => {

    //PASSING GLOBAL SETTINGS
    const { mainWidth } = useContext(GlobalStates);

    //SETTINGS
    //const maxWidth = window.innerWidth;
    const [maxWidth, setMaxWidth] = useState(0);

    //GET WINDOW WIDTH
    useEffect(() => {
        resizeFun();
    })

    function resizeFun() {
        console.log("RESIZING");
        if(window.innerWidth < 1300){
            setMaxWidth(window.innerWidth);
        }else{
            setMaxWidth(1300);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", resizeFun);


        return () => {
            window.removeEventListener("resize", resizeFun);
        }
    }, [])


    return (
        <>
        <div 
        className="navpage" 
        onResize={resizeFun}
        >
        <nav 
        style={{width: maxWidth}} 
        className="navbar">

            <Link href="/">
                <button>home</button>
            </Link>

            <Link href="/releases">
                <button>releases</button>
            </Link>

            <Link href="/submit">
                <button>submit music</button>
            </Link>

            <Link href="/workplace">
                <button>workplace</button>
            </Link>

            <Link href="/contact">
                <button>contact</button>
            </Link>

        </nav>
        </div>
        </>

    )
}

export default Navbar;