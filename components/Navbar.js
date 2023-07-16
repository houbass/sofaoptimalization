import Link from "next/link";

//anime.js
import anime from 'animejs';

//GLOBALSTATES
import { useEffect, useRef, useState } from "react";

//top navbar
const Navbar = () => {

    //navbar 
    const [navbarOpacity, setNavbarOpacity] = useState("0");

    //burger SVG ref and Paths
    const svgRef = useRef();
    const path1ref = useRef();
    const path3ref = useRef();

    const [path2, setPath2] = useState("M10 29H100V49H0V29Z")
    const burgerPath1 = "M0 0H100V20H0V0Z";
    const crossPath1 = "M11.5381 0L99.6658 62.2438L88.1277 78.58L7.15256e-07 16.3362L11.5381 0Z";
    const burgerPath3 = "M0 58H100V78H0V58Z";
    const crossPath3 = "M0 62.2519L88.3527 2.3586e-06L99.8722 16.3494L11.5195 78.6013L0 62.2519Z";

    //SETTINGS

    //DESKTOP NAVBAR
    const [navbarVisibility, setNavbarVisibility] = useState("visible");

    //MOBILE BURGER STATES
    const [burgerColor, setBurgerColor] = useState("rgba(255, 255, 255, 0.9)");
    const [burgerVisibility, setBurgerVisiblity] = useState("hidden");
    const [burgerToggler, setBurgerToggler] = useState(false);
    const [mobileMenuVisibility, setBurgerMenuVisibility] = useState("hidden");



    //MOBILE BURGER mouse events
    function mouseEnterFun() {
        setBurgerColor("rgba(255, 70, 70, 1)");
    }
    function mouseLeaveFun() {
        setBurgerColor("rgba(255, 255, 255, 1)");
    }
    function burgerClickFun() {
        let path1;
        let path3;
        if(burgerToggler === false){
            setBurgerMenuVisibility("visible");
            setBurgerToggler(true);

            path1 = crossPath1;
            setPath2("0");
            path3 = crossPath3;

            const path1animation1 = anime({
                targets: path1ref.current,
                d: [
                  { value: path1
                  },
                ],
                easing: 'easeOutQuad',
                duration: 300,
                loop: false
              });

              const path3animation1 = anime({
                targets: path3ref.current,
                d: [
                  { value: path3
                  },
                ],
                easing: 'easeOutQuad',
                duration: 100,
                loop: false
              });



        }else{
            setBurgerMenuVisibility("hidden");
            setBurgerToggler(false);

            path1 = burgerPath1;
            setPath2("M10 29H100V49H0V29Z");
            path3 = burgerPath3;

            const path1animation2 = anime({
                targets: path1ref.current,
                d: [
                  { value: path1
                  },
                ],
                easing: 'easeOutQuad',
                duration: 100,
                loop: false
              });

              const path3animation2 = anime({
                targets: path3ref.current,
                d: [
                  { value: path3
                  },
                ],
                easing: 'easeOutQuad',
                duration: 500,
                loop: false
              });

        }
    }
    function burgerLinkClickFun() {
        setBurgerMenuVisibility("hidden");
        setBurgerToggler(false);

        setPath2("M10 29H100V49H0V29Z");
        const path1animation3 = anime({
            targets: path1ref.current,
            d: [
              { value: burgerPath1
              },
            ],
            easing: 'easeOutQuad',
            duration: 100,
            loop: false
          });

          const path3animation3 = anime({
            targets: path3ref.current,
            d: [
              { value: burgerPath3
              },
            ],
            easing: 'easeOutQuad',
            duration: 500,
            loop: false
          });



    }



    //on load opacity
    useEffect(() => {
        setTimeout(() => {
            setNavbarOpacity("1");
        }, 2000)
    }, [])

    function resizeFun() {

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

    //RESIZE LISTENER
    useEffect(() => {
        resizeFun();
        window.addEventListener("resize", resizeFun);
        return () => {
            window.removeEventListener("resize", resizeFun);
        }
    }, [])


    return (
        <>
        <div 
        className="navpage" 
        style={{
            opacity: navbarOpacity,
            transition: "1s"
        }}
        >
        <div         style={{
            width: "100%",
            maxWidth: "1300px",

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
                width: "100%",
                padding: "0 50px",
                top: "20px",
                visibility: burgerVisibility,
                zIndex: "5"
                
            }} 
            onMouseEnter={mouseEnterFun} 
            onMouseLeave={mouseLeaveFun}
            onClick={burgerClickFun}
            >
                

                <svg ref={svgRef} width="40" height="40" viewBox="0 0 100 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={path1ref} d={burgerPath1} fill={burgerColor}/>

                    <path d={path2} fill={burgerColor}/>
                    <path ref={path3ref} d={burgerPath3} fill={burgerColor}/>
                    
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
                width: "100%",
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