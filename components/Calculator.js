import { useEffect, useState } from "react";


const Calculator = () => {

    //ADD NUMBER
    const [newValue, setNewValue] = useState("");
    const [addNumber, setAddNumber] = useState(null)

    //ADD CHAR
    const [char, setChar] = useState("");

    //VYSLEDEK
    const [sum, setSum] = useState("");

    //VYSLEDEK
    function finalSum(){
        switch(char){
            case "+": 
                setSum(Number(sum) +  newValue );
                setNewValue("");
                break;
            case "-":
                setSum(Number(sum) -  newValue );
                setNewValue("");
            case "*":
                setSum(Number(sum) *  newValue );
                setNewValue("");
            case "":
                setSum(newValue);
                setNewValue("");
        }      
    }

    //CLEAR
    function clear(){
        setSum("");
        setNewValue("");
        setChar("+");
    }

    //PLUS
    function plus(){
        setChar("+");
        finalSum();
    }

    //MINUS
    function minus(){
        setChar("-");
        finalSum();
    }

    //MULTIPLY
    function multiply(){
        setChar("*");
        finalSum();
    }





    return(
        <>
        <div 
        style={{
            position: "absolute",
            top: "250px"
        }}>
            <h3>Calculator</h3>
            <input 
            style={{
            }} 
            value={newValue} 
            onChange={(e) => {setNewValue(Number(e.target.value))}}
            />

            <div className="calbtn-table">
            <button onClick={plus} className="calbtn">+</button>
            <button onClick={minus} className="calbtn">-</button>
            <button onClick={multiply} className="calbtn">*</button>
            <button onClick={finalSum} className="calbtn">=</button>
            <button onClick={clear} className="calbtn">C</button>
            </div>

            <p>průběh: {sum} {char} {newValue}</p>
            <p>výsledek: {sum}</p>
            
        </div>
        </>
    )
}

export default Calculator;