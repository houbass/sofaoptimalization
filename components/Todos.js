import { color } from "framer-motion";
import { Preahvihear } from "next/font/google";
import { useEffect, useState } from "react";

//local storage hook
import useLocalStorageState from 'use-local-storage-state'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg"

const Todos = () => {

    //TODO
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useLocalStorageState('todos', {defaultValue: [] });
    const [completedTodo, setCompletedTodo] = useLocalStorageState('completedtodos', {defaultValue: [] });

    //VISIBLE COMPLETED
    const [completedVisibility, setCompletedVisibility] = useState("hidden");

    //BOX1   
    const [box1XOffset, setBox1XOffset] = useState(0);
    const [box1YOffset, setBox1YOffset] = useState(0);

    //MAP BOX
    const [mapBoxX, setMapBoxX] = useState(100);
    const [mapBoxY, setMapBoxY] = useState(200);

    //INFO TEXT
    const [infoText, setInfoText] = useState("");

    //COMPLETED BAT
    const completedBar = (completedTodo.length / (completedTodo.length + todos.length)) * 100;

    //cursor
    const [cursor, setCursor] = useState("grab");

    //WIDTH AND height
    //const windowWidth = window.innerWidth;
    const [windowWidth, setWindowWidth] = useState(null);

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
            setInfoText("*write some note")
        }else{

            if(checking.length === 0 && checkingCompleted.length === 0){            
                setTodos([...todos, {
                    text: todo, 
                    x: mapBoxX, 
                    y: mapBoxY,
                    visibility: "visible",
                    menuVisibility: "hidden",
                    completed: false,
                    marginTop: "10px",
                    zIndex: "2"
                }]);
                setMapBoxX(Math.random() * (windowWidth * 0.8));
                setMapBoxY(240 + (Math.random() * 300));
                
            }
            if(checking.length > 0){
                setInfoText("*Already in list");
            }
            if(checkingCompleted.length > 0){
                setInfoText("*Already completed");
            }
        }

        setTodo("");
    }

    //DROP FUNKCE
    const drop = (e) => {
        e.preventDefault();
      }

      const deleteCompleted = () => {
        setCompletedTodo(completedTodo.filter((item) => null));
    }

    useEffect(() => {
        if(completedTodo.length <= 0){
            setCompletedVisibility("hidden");
        }else{
            setCompletedVisibility("visible");
        }
    }, [completedTodo]);


    const getCoordinates = (e) => {
        //console.log(e.pageY);
    }

    //GET WINDOW WIDTH
    useEffect(() => {
        setWindowWidth(window.innerWidth)
    })



    return(
        <div id="div1" 
        onDragOver={drop}
        onMouseMove={getCoordinates}

        style={{
            width: "90%",
            height: "500px",
            //background: "rgba(255,255,255,0.2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "80px",
            marginBottom: "150px"
        }}>
            <div style={{display: "flex"}}>
                <input style={{maxWidth: "300px", marginRight: "10px"}} onChange={todoInput} value={todo} placeholder="add note"></input>
                <button style={{width: "30px",height: "30px", borderRadius: "50%"}} className='material-symbols-outlined' onClick={todoAdd}>add</button>
            </div>
            <p style={{color: "red", fontWeight: "bold", fontSize: "12px"}}>{infoText}</p>
            
            <div 
            style={{
                position: "absolute",
                backgroundImage: `url(${backgroundPic2.src})`,
                width: "90%",
                top: "200px",
                height: "500px",
                borderRadius: "40px",
                zIndex: "-1"
            }}>

            </div>

            <br/><br/>
            <div>
                {todos.map((note) => {

                    let statusColor;
                    if(note.completed === false){
                        statusColor = "red";
                    }else{
                        statusColor = "green";
                    }

                    const mapClickDrag = (e) => {
                        setBox1XOffset(note.x - e.pageX);
                        setBox1YOffset(note.y - e.pageY);
                    }


                    const mapDrag = (e) => {
                        e.preventDefault();

                        setCursor("grabbing");
                        setTodos(todos.map((item) => {
                            if(item.text === note.text){
                                if(e.pageY > 200){

                                    return {
                                        ...item, 
                                        x: e.pageX + box1XOffset, 
                                        y: e.pageY + box1YOffset,
                                        visibility: "hidden"
                                    }
                                }else{
                                    return {
                                        ...item, 
                                        x: 100, 
                                        y: 210,
                                        visibility: "hidden"
                                    }
                                }
                                
                                //console.log("y: " + todos[0].y)

                            } 
                            console.log(e.pageY)

                            return item;
                        }))
                    }


                    const mapDragStop = (e) => {
                        e.preventDefault();
                        setCursor("grab");
                        console.log("grab finished")
                        setTodos(todos.map((item) => {
                            if(item.text === note.text){
                                return {
                                    ...item, 
                                    visibility: "visible"
                                }
                            } 
                            return item;
                        }))
                    }               
                    
                    const mapShowMenu = () => {
                        setTodos(todos.map((item) => {
                            if(item.text === note.text){
                                return {
                                    ...item, 
                                    menuVisibility: "visible",
                                    marginTop: "0px",
                                    zIndex: "3"
                                }
                            } 
                            return item;
                        }))
                    }

                    const mapHideMenu = () => {
                        setTodos(todos.map((item) => {
                            if(item.text === note.text){
                                return {
                                    ...item, 
                                    menuVisibility: "hidden",
                                    marginTop: "30px",
                                    zIndex: "2"
                                }
                            } 
                            return item;
                        }))
                    }

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
                        setTimeout(() => {
                            setTodos(todos.filter((item) => item.text !== note.text));                            
                            //add it to completed
                            setCompletedTodo([
                                ...completedTodo, note.text
                            ])
                        }, 1000)
                        
                    }

                    const mapDelete = () => {
                        setTodos(todos.filter((item) => item.text !== note.text));
                    }
                    
                    return(
                        <div 
                        key={note.text}
                        draggable="true" 
                        onMouseDown={mapClickDrag}
                        onDragCapture={mapDrag}
                        onDragEnd={mapDragStop}
                        onMouseEnter={mapShowMenu}
                        onMouseLeave={mapHideMenu}

                        style={{
                            position: "absolute",
                            height: "75px",
                            top: `${note.y}px`,
                            left: `${note.x}px`,
                            zIndex: note.zIndex,
                            visibility: note.visibility,
                            borderRadius: "10px",
                            //background: "red",
                        }}>
                            <div 
                            style={{
                                background: statusColor,
                                //background: "orange",
                                marginTop: note.marginTop,
                                padding: "10px 10px 10px 10px",
                                borderRadius: "10px",
                                //width: "70px",
                                transition: "0.5s",
                                border: "solid 3px white"
                            }}>
                                <p style={{fontSize: "20px"}}>{note.text}</p>
                            </div>
                            <div 
                            style={{
                                position: "absolute", 
                                width: "100%",
                                bottom: "5px",
                                left: "0px",
                                //background: "rgba(255,255,255,0.2)",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                visibility: note.menuVisibility,
                                //visibility: "visible",
                                //background: "rgba(0,0,255,0.5)",
                                padding: "0px 10px"
                            }}>
                                <button style={{fontSize: "12px", borderRadius: "50%", padding: "4px"}} onClick={mapCheckDone} title="completed" class="material-symbols-outlined">check</button>
                                <button style={{fontSize: "12px", borderRadius: "50%", padding: "4px"}}  onClick={mapDelete} title="delete" class="material-symbols-outlined">delete</button>
                            </div>
                            <div 
                            style={{
                                position: "absolute", 
                                width: "100%",
                                height: "50px",
                                top: "0",
                                left: "0px",
                                //background: "rgba(255,255,255,0.2)",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                visibility: note.menuVisibility,
                                borderRadius: "10px",
                                //visibility: "visible",
                                background: "rgba(0,0,0,0.5)",
                                cursor: cursor
                            }}>
                                <p><strong>move</strong></p>
                            </div>
                        </div>
                    )
                })}
                <div 
                style={{
                    position: "absolute",
                    top: "220px",
                    right: "0",
                    //width: "80px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "row",
                    visibility: completedVisibility,
                    background: "rgba(20,20,20,0.7)",
                    borderRadius: "10px 0 0 10px",
                    border: "solid 3px rgba(255,255,255,0.7)",
                    transition: "1s",
                    
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
    )
}

export default Todos;