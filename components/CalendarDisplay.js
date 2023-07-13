

const CalendarDisplay = ({ dayText, dayMonth, tail, monthText }) => {

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{
                width: "40px",
                height: "20px",
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"

            }}>
                <div style={{
                    width: "10px",
                    height: "100%",
                    background: "black",
                    border: "solid 3px white",
                    borderRadius: "5px"

                }}>
                </div>

                <div style={{
                    width: "10px",
                    height: "100%",
                    background: "black",
                    border: "solid 3px white",
                    borderRadius: "5px"

                }}>
                </div>


            </div>

            <div style={{
                width: "90px",
                border: "solid 3px white",
                borderRadius: "22px",
                marginTop: "9px"
            }}>
                <div style={{
                    width: "100%",
                    height: "33px",
                    background: "red",
                    borderRadius: "20px 20px 0 0",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "white"
                }}>
                    <p style={{marginTop: "7px"}}>{dayText}</p>
                </div>

                <div style={{
                    height: "33px",
                    background: "rgba(255,255,255,0.1)",
                    fontSize: "28px",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"

                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "baseline",
                        color: "white"
                    }}>

                    
                    <p>{dayMonth}</p>
                    <p style={{fontSize: "15px"}}>{tail}</p>
                    </div>
                </div>

                <div style={{
                    height: "22px",
                    background: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "bold",
                    borderRadius: "0 0 20px 20px"
                    

                }}>
                    <p style={{color: "black"}}>{monthText}</p>

                </div>

            </div>
        </div>
    )
}

export default CalendarDisplay;