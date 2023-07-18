import { useEffect, useState } from "react";

//local storage hook
import useLocalStorageState from 'use-local-storage-state'

//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import congratsAnimation from "@/components/lottieanimations/congrats.json";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const Todos = () => {
    
    //TODO
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useLocalStorageState('todos', {defaultValue: [] });
    const [completedTodo, setCompletedTodo] = useLocalStorageState('completedtodos', {defaultValue: [] });

    //VISIBLE COMPLETED
    const [completedVisibility, setCompletedVisibility] = useState("hidden");
    const [animationHandler, setAnimationHandler] = useState(null);

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
        setAnimationHandler(null)
        const checking = todos.filter((item) => item.text===todo);
        const checkingCompleted = completedTodo.filter((item) => item===todo);

        if(todo === ""){
            setInfoText("*write some note")
        }else{
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
            }else{
                setAnimationHandler(null)
            }
        }

    }, [completedTodo, todos]);


    return(
        <div id="div1" 

        style={{
            width: "90%",
            height: "700px",
            //background: "orange",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //marginTop: "80px",
            marginBottom: "150px",
            zIndex: "0"
        }}>
            <div style={{display: "flex", gap:"10px"}}>
                <input style={{maxWidth: "300px"}} onChange={todoInput} value={todo} placeholder="add note"></input>
                <button style={{width: "30px", height: "30px", borderRadius: "20%"}} className='material-symbols-outlined' onClick={todoAdd}>add</button>
            </div>
            <p style={{color: "red", fontWeight: "bold", fontSize: "12px"}}>{infoText} </p>
            <br/>
            <div 
            style={{
                //position: "absolute",
                backgroundImage: `url(${backgroundPic2.src})`,
                maxWidth: "500PX",
                width: "90%",
                minHeigh: "200px",
                borderRadius: "40px",
            }}>

            <div 
            style={{
                padding: "20px"
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
                        <div 
                        key={note.text}
                        className="todo"
                        style={{
                        }}>
                            <p >{note.text}</p>
                            <div 
                            style={{
                                display: "flex",
                                height: "100%",
                            }}>
                                <button className="todobtn material-symbols-outlined" onClick={mapCheckDone} title="completed" >check</button>
                                <button className="todobtn material-symbols-outlined" onClick={mapDelete} title="delete" >delete</button>
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
                                <p style={{color: "green", fontWeight: "bold"}}>{item}</p>
                            </div>
                        ))}

                        <button className='material-symbols-outlined' onClick={deleteCompleted}>scan_delete</button>
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