import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//anime.js
import anime from 'animejs';

//pic
import newtry from "./pic/newtrysvg.svg";
import newtry2 from "./pic/newtrysvgRed.svg";

//GLOBALSTATES
import { GlobalStates } from '@/globalstates/GlobalStates'

//top navbar
const Navbar = () => {

    //PASSING GLOBAL SETTINGS
    const { mobile } = useContext(GlobalStates);

    //burger SVG ref and Paths
    const svgRef = useRef();
    const path1ref = useRef();
    const path3ref = useRef();

    const [path2, setPath2] = useState("M10 29H100V49H0V29Z")
    const burgerPath1 = "M0 0H100V20H0V0Z";
    const crossPath1 = "M11.5381 0L99.6658 62.2438L88.1277 78.58L7.15256e-07 16.3362L11.5381 0Z";
    const burgerPath3 = "M0 58H100V78H0V58Z";
    const crossPath3 = "M0 62.2519L88.3527 2.3586e-06L99.8722 16.3494L11.5195 78.6013L0 62.2519Z";

    //img hover
    const [imgSrc, setImgSrc] = useState(newtry);

    //MOBILE BURGER STATES
    const [burgerColor, setBurgerColor] = useState("rgba(255, 255, 255, 0.9)");
    const [burgerToggler, setBurgerToggler] = useState(false);
    const [mobileMenuVisibility, setBurgerMenuVisibility] = useState("hidden");
    const [burgerBackground, setBurgerBackground] = useState("rgba(20,20,20,1)");

    //MOBILE BURGER mouse events
    function mouseEnterFun() {
        if(mobile === false){
            setBurgerColor("rgba(255, 70, 70, 1)");
        }else{
        }
    }
    function mouseLeaveFun() {
        if(mobile === false){
            setBurgerColor("rgba(255, 255, 255, 1)");
        }else{
        }
    }
    function burgerClickFun() {
        let path1;
        let path3;
        if(burgerToggler === false){
            setBurgerMenuVisibility("visible");
            setBurgerToggler(true);
            setBurgerColor("rgba(255, 70, 70, 1)");
            setBurgerBackground("transparent");

            path1 = crossPath1;
            setPath2("M0 0");
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
            setBurgerColor("rgba(255, 255, 255, 1)");
            setBurgerBackground("rgba(20,20,20,1)")

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
        setBurgerColor("rgba(255, 255, 255, 1)");
        setBurgerBackground("rgba(20,20,20,1)")

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

    function imageEnter() {
        setImgSrc(newtry2);
    }

    function imageLeave() {
        setImgSrc(newtry);
    }

    return (
        <>
        <div 
        style={{

        }}>
            <div 
            className="navpage maincardsAnimation3" 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }} 
            >
                <div         
                style={{
                    width: "100%",
                    maxWidth: "1000px",
                    padding: "0px 20px"
                }} >

                    <nav 
                    className="navbar" 
                    >

                        <Link 
                        href="/"
                        className="logonav" 
                        onMouseEnter={imageEnter} 
                        onMouseLeave={imageLeave} 
                        >
                            <Image 
                            height="50" 
                            src={imgSrc} 
                            alt="sofa lofi logo"
                            >   
                            </Image>




                        </Link>

                        <Link href="/releases" >
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
            </div>


            <div
            className="burgerVisibility"
            style={{
                position: "fixed",
                zIndex: "65",
                width: "100%"
            }} 
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0px 20px",
                    }} 
                >
                    <div 
                    
                    style={{

                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                        width: "100%",
                        padding: "15px 50px",
                        top: "0px",

                        background: burgerBackground,
                        height: "70px",
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
                </div>
            </div>

            <div
            style={{
                position: "fixed",
                zIndex: "52",
                width: "100%",
                padding: "0px 20px",
                visibility: mobileMenuVisibility,
            }} >
                <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(20, 20, 20, 1)",
                    height: "100vh",
                    top: "0px",
                }} 
                >
                    <div className="mobNavbar">
                        <Link href="/">
                            <button onClick={burgerLinkClickFun}>HOME</button>
                        </Link>

                        <Link href="/releases" >
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