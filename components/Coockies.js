import { useEffect, useState } from "react"


export default function Coockies({askedForCoockies, setAskedForCoockies, setCoockiesAccepted}) {

    const [banerClass, setBannerClass] = useState("0 200px");

    useEffect(() => {

        if(askedForCoockies === false) {
            setBannerClass("0 0")
        }else{
            setBannerClass("0 200px");
        }

    }, [askedForCoockies])


    return(
        <>
        <div className="brush"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}
        >
            <div 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0px 20px",
                maxWidth: "1000px",
                width: "100%",
                position: "fixed",
                bottom: "0px",
                zIndex: "100",
                translate: banerClass,
                transition: "2s",
            }}>
            <div
            style={{
                borderTop: "4px solid rgba(243, 74, 74, 1)",
                width: "100%",
                padding: "40px 20px",
                background: "rgba(20,20,20,1)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                color: "white",
            }}
            >
                <h2>This website is using coockies.</h2>

                <div 
                    className="coockies"
                    style={{

                    }}
                >
                    <button 
                    className="nicebutton4"
                    onClick={() => {
                        setAskedForCoockies(true);
                        setCoockiesAccepted(true);
                    }}>agree</button>

                    <button 
                    className="nicebutton5"
                    onClick={() => {
                        setAskedForCoockies(true);
                        setCoockiesAccepted(false);
                    }}>decline</button>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}