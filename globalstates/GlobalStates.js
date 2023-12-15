
import { createContext, useLayoutEffect, useState } from "react";

export const GlobalStates = createContext();
export const GlobalStatesProvider = ({ children }) => {

    //LOADER VISIBILITY
    const [loadingState, setLoadingState] = useState("hidden");
    
    //MOBILE OR COMPUTER CHECK
    const [mobile, setMobile] = useState(null);
    useLayoutEffect(() => {
      if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }, [])


    return (
        <GlobalStates.Provider value={{ mobile, loadingState, setLoadingState }}>
            {children}
        </GlobalStates.Provider>
    );
};