import Link from "next/link";
import styles from '@/styles/Home.module.css'

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'
import { useContext, useEffect, useState } from "react";

//top navbar
const Navbar = () => {

    //navbar 
    const [navbarOpacity, setNavbarOpacity] = useState("0");

    //PASSING GLOBAL SETTINGS
    const { mainWidth } = useContext(GlobalStates);

    //SETTINGS
    //const maxWidth = window.innerWidth;
    const [maxWidth, setMaxWidth] = useState(0);

    //DESKTOP NAVBAR
    const [navbarVisibility, setNavbarVisibility] = useState("visible");

    //MOBILE BURGER STATES
    const [burgerColor, setBurgerColor] = useState("rgba(255, 255, 255, 0.9)");
    const [burgerVisibility, setBurgerVisiblity] = useState("hidden");
    const [burgerToggler, setBurgerToggler] = useState(false);
    const [mobileMenuVisibility, setBurgerMenuVisibility] = useState("hidden");


    //MOBILE BURGER mouse events
    function mouseEnterFun() {
        setBurgerColor("rgba(255, 70, 70, 0.8)");
    }
    function mouseLeaveFun() {
        setBurgerColor("rgba(255, 255, 255, 0.9)");
    }
    function burgerClickFun() {
        if(burgerToggler === false){
            setBurgerMenuVisibility("visible");
            setBurgerToggler(true);
        }else{
            setBurgerMenuVisibility("hidden");
            setBurgerToggler(false);
        }
    }
    function burgerLinkClickFun() {
        setBurgerMenuVisibility("hidden");
        setBurgerToggler(false);
    }

    //on load opacity
    useEffect(() => {
        setTimeout(() => {
            setNavbarOpacity("1");
        }, 2000)
    }, [])



    function resizeFun() {
        if(window.innerWidth < 1300){
            setMaxWidth(window.innerWidth);
        }else{
            setMaxWidth(1300);
        }


        function barVisibilityFun() {
            if(window.innerWidth < 700){
                setBurgerVisiblity("visible");
                setNavbarVisibility("hidden");
            }else{
                setBurgerVisiblity("hidden");
                setNavbarVisibility("visible");
            }
        }
        barVisibilityFun()

    }

    //GET WINDOW WIDTH
    useEffect(() => {
        resizeFun();
    }, [])
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
        style={{
            opacity: navbarOpacity,
            transition: "1s"
        }}
        >
        <div         style={{
            width: maxWidth,

        }} >

        
        <nav 
        className="navbar"
        style={{
            visibility: navbarVisibility,
        }}
        >

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
        <div
            style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
                //background: "orange",
                width: maxWidth,
                padding: "0 50px",
                top: "20px",
                visibility: burgerVisibility,
                zIndex: "5"
                
            }} 
            onMouseEnter={mouseEnterFun} 
            onMouseLeave={mouseLeaveFun}
            onClick={burgerClickFun}
            >
                
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20" fill={burgerColor} />
                    <rect y="30" width="100" height="20" fill={burgerColor} />
                    <rect y="60" width="100" height="20" fill={burgerColor} />
                </svg>
            </div>
        


            <div
            style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 0, 0, 0.9)",
                width: maxWidth,
                height: "100vh",
                padding: "0 50px",
                top: "0px",
                visibility: mobileMenuVisibility,
            }} 
            >
                <div className="mobNavbar">
                    <Link href="/">
                        <button onClick={burgerLinkClickFun}>HOME</button>
                    </Link>

                    <Link href="/releases">
                        <button onClick={burgerLinkClickFun}>RELEASES</button>
                    </Link>

                    <Link href="/submit">
                        <button onClick={burgerLinkClickFun}>SUBMIT MUSIC</button>
                    </Link>

                    <Link href="/workplace">
                        <button onClick={burgerLinkClickFun}>WORKPLACE</button>
                    </Link>

                    <Link href="/contact">
                        <button onClick={burgerLinkClickFun}>CONTACT</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default Navbar;