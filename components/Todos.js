import { useEffect, useState } from "react";

//local storage hook
import useLocalStorageState from 'use-local-storage-state';

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import congratsAnimation from "@/components/lottieanimations/congrats.json";

//components
import Checkmark from "./Checkmark";

const Todos = () => {
    
    //TODO
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useLocalStorageState('todos', {defaultValue: [] });
    const [completedTodo, setCompletedTodo] = useLocalStorageState('completedtodos', {defaultValue: [] });

    //VISIBLE COMPLETED
    const [completedVisibility, setCompletedVisibility] = useState("hidden");
    const [animationHandler, setAnimationHandler] = useState(null);
    const [congratsText, setCongratsText] = useState("");

    //INFO TEXT
    const [infoText, setInfoText] = useState("");

    //COMPLETED BAT
    const completedBar = (completedTodo.length / (completedTodo.length + todos.length)) * 100;

    //TODO FUNKCE
    //input
    const todoInput = (e) => {
        setTodo(e.target.value);
        setInfoText("");
    }

    //add 
    const todoAdd = () => {

        const checking = todos.filter((item) => item.text===todo);
        const checkingCompleted = completedTodo.filter((item) => item===todo);

        if(todo === ""){
            setInfoText("*write some to do")
        }else{
            setAnimationHandler(null)
            setCongratsText("");

            if(todo.length < 15) {

                if(checking.length === 0 && checkingCompleted.length === 0){            
                    setTodos([...todos, {
                        text: todo, 
                        visibility: "visible",
                        menuVisibility: "hidden",
                        completed: false,
                        marginTop: "10px",
                        //zIndex: "2"
                    }]);
                    setTodo(""); 
                }
                if(checking.length > 0){
                    setInfoText("*Already in list");
                }
                if(checkingCompleted.length > 0){
                    setInfoText("*Already completed");
                }
            }else{
                setInfoText("*max 15 characters");
            }
        }
    }

    //DELETE ALL COMPLETED
    const deleteCompleted = () => {
        setAnimationHandler(null)
        setCongratsText("");
        setCompletedTodo(completedTodo.filter((item) => null));
    }

    //COMPLETED TABLE
    useEffect(() => {
        if(completedTodo.length <= 0){
            setCompletedVisibility("hidden");

        }else{
            setCompletedVisibility("visible");

            if(completedBar === 100){
                setAnimationHandler(congratsAnimation)
                setCongratsText("congrats you have finished all todos");
            }else{
                setAnimationHandler(null)
                setCongratsText("");
            }
        }

    }, [completedTodo, todos]);


    return(
        <div id="div1" 

        style={{
            maxWidth: "580px",
            width: "90%",
            //height: "700px",
            background: "rgba(20,20,20,0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: "0",
            padding: "50px 0",
            borderRadius: "50px",
            boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
        }}>

            <div>
            <div className="addbox">
                <input className="courier" style={{height: "30px", maxWidth: "300px", background: "rgba(255,255,255,0.9)"}} onChange={todoInput} value={todo} placeholder="add to do"></input>
                <button 
                    className='material-symbols-outlined addbtn' 
                    onClick={todoAdd}
                >add
                </button>
            </div>
            <p style={{color: "red", fontWeight: "bold", fontSize: "12px"}}>{infoText} </p>
            </div>

            <br/>
            <div 
            style={{
                //position: "absolute",
                //backgroundImage: `url(${backgroundPic2.src})`,
                maxWidth: "500PX",
                width: "90%",
                minHeigh: "200px",
                borderRadius: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 20px"

            }}>
                
                <div className="congratsText brush">
                <h2>{congratsText}</h2>
                </div>
            <div 
            style={{
                
                width: "100%"
            }}>
                {todos.map((note) => {
                          
                    //SET THIS AS COMPLETED
                    const mapCheckDone = () => {
                        //change status
                        setTodos(todos.map((item) => {
                            if(item.text === note.text){
                                return {
                                    ...item, 
                                    completed: true
                                }
                            } 
                            return item;
                        }))

                        //wait for animation
                            setTodos(todos.filter((item) => item.text !== note.text));                            
                            //add it to completed
                            setCompletedTodo([
                                ...completedTodo, note.text
                            ])

                    
                        
                    }

                    //DELETE THIS
                    const mapDelete = () => {
                        setTodos(todos.filter((item) => item.text !== note.text));
                    }
                    
                    return(
                        <div key={note.text} className="todo">
                        <button style={{ fontVariationSettings: "'wght' 1200", fontSize: "30px"}} id="todobtn" className="material-symbols-outlined" onClick={mapCheckDone} title="completed" >check</button>
                        
                        <div 
                        id="todotextbox" 
                        
                        //className="todotextbox"
                        key={note.text}
                        >
                            <mark>{note.text}</mark>

                        </div>
  
                        
   
                        </div>
                    )
                })}
                <div 
                className="completedTodos"
                style={{
                    visibility: completedVisibility,   
                }}> 
                    <div style={{
                        width: "5px",
                        background: "red",
                        borderRadius: "3px"
                    }}>
                        <div 
                        style={{
                            width: "100%", 
                            height: `${completedBar}%`, 
                            background: "rgb(0,200,100)",
                            borderRadius: "3px 3px 0 0"
                        }}>
                            
                        </div>
                    
                    </div>
                    <div style={{marginLeft: "5px"}}>

                        {completedTodo.map((item) => (
                            <div key={item.text}>
                                <p 
                                className="brush"
                                style={{
                                    color: "#04AA6D", 
                                    fontWeight: "bold", 
                                    textDecoration: "line-through", 
                                    textDecorationColor: "rgba(255,255,255,0.7)"
                                }}>
                                    {item}
                                </p>
                            </div>
                        ))}
                        
                        <button 
                        className='material-symbols-outlined todoclose' 
                        onClick={deleteCompleted} 
                        //id="tododelete"
                        >close</button>
                    </div>
                
                </div>

            </div>
            </div>
            <Lottie 
                //lottieRef={animationRef} 
                className="congrats" 
                animationData={animationHandler} 
            />
        </div>
    )
}

export default Todos;