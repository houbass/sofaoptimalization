
import React, {useState, useEffect} from "react";

//components
import CalendarDisplay from "./CalendarDisplay";


function Calendar() {

    const date = new Date();

    //DAYS
    const [dayMonth, setDayMonth] = useState("");

    const [day, setDay] = useState("");
    const [dayText, setDayText] = useState("");
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [tail, setTail] = useState("");

    //MONTH
    const [month, setMonth] = useState("");
    const [monthText, setMonthText] = useState("");
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //STYLES
    const styleMain = {
        position: "absolute",
        marginTop: "70px",
        right: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "default"
    }

    useEffect(() => {
        //DAYS
        setDayMonth(date.getDate());
        setDay(Number(date.getDay()));
        setDayText(dayName[day]);

        //MONTH
        setMonth(Number(date.getMonth()));
        setMonthText(monthName[month]);

        switch(dayMonth){
            case 1:
                setTail("st");
                break;
            case 2:
                setTail("nd");
                break;
            case 3:
                setTail("rd");
                break;
            case 21:
                setTail("st");
                break;
            case 22:
                setTail("nd");
                break;
            case 23:
                setTail("rd");
                break;
            case 31:
                setTail("st");
                break;        
            default:
                setTail("th");
        }
    })


    return (
        <div style={styleMain}>
            <CalendarDisplay dayText={dayText} dayMonth={dayMonth} tail={tail} monthText={monthText}/>
        </div>
    );
}

export default Calendar;