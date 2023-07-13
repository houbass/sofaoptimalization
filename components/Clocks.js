import React, {useState, useRef, useEffect} from "react";

//COMPONENTS
import ClockDisplay from "./ClockDisplay";

function Clocks() {

const date = new Date();

//seconds
const [seconds, setSeconds] = useState(date.getSeconds());
const [secZero, setSecZero] = useState("");
const sec = useRef(date.getSeconds());

//minutes
const [minutes, setMinutes] = useState(date.getMinutes());
const [minZero, setMinZero] = useState("");
const min = useRef(date.getMinutes());

//hours
const [hours, setHours] = useState(date.getHours());
const [hoursZero, setHoursZero] = useState("");
const hourss = useRef(date.getHours());

//STYLES
const styleMain = {
    //position: "absolute",
    //left: "10px",
    //marginTop: "70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "default"
}

const styleTextClock = {
    display: "flex",
    flexDirection: "row",
    fontSize: "12px",
    fontWeight: "bold",
    color: "white"
}


useEffect(() => {

    const interval = setInterval(async() => {

        //seconds
        if (sec.current < 59){
            sec.current = sec.current + 1;
        }else{
            sec.current = 0;
            if(min.current < 59){
                min.current = min.current + 1;
            }else{
                min.current = 0;
                if(hourss.current < 23){
                    hourss.current = hourss.current + 1;
                }else{
                    hourss.current = 0;
                }
                setHours(hourss.current);
            }
            setMinutes(min.current);
        }
        setSeconds(sec.current);

        //sec zero
        if (Math.round(sec.current) < 10){
            setSecZero(0);
        }else{
            setSecZero("");
        }

        //minutes zero
        if (min.current < 10){
            setMinZero(0);
        }else{
            setMinZero("");
        }

        //hour zero
        if (hourss.current < 10){
            setHoursZero(0);
        }else{
            setHoursZero("");
        }

    }, 1000)
    return () => clearInterval(interval);
})

  return (
    <div style={styleMain}>
        
        <ClockDisplay seconds={seconds} minutes={minutes} hours={hours}/>

        <div style={styleTextClock}>
            <p>{hoursZero}{hours}</p>
            <p>:{minZero}{minutes}</p>
            <p>:{secZero}{Math.round(seconds)}</p>
        </div>

    </div>
  );
}

export default Clocks;