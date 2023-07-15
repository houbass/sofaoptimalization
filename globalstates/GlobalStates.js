
import { createContext, useEffect, useState } from "react";

export const GlobalStates = createContext();
export const GlobalStatesProvider = ({ children }) => {

    //MOBILE OR COMPUTER CHECK
    const [mobile, setMobile] = useState(null);
    useEffect(() => {
      if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
        console.log("ITS MOBILE")
        setMobile(true);
      } else {
        console.log("ITS COMPUTER")
        setMobile(false);
      }
    }, [])


    return (
        <GlobalStates.Provider value={{ mobile }}>
            {children}
        </GlobalStates.Provider>
    );
};