import React, { useState } from "react";
function TodoList(props) {
    const [task,setTask]=useState([]);
    const [inputValue,setInputValue]=useState("");
    const handelInputs=(e)=>setInputValue(e.target.value);
    const addTask=(id)=>{
        if(inputValue.trim()!==""){
            setTask([...task,{id:Date.now(),text:inputValue,completed:false}])
        }
        setInputValue("")
    }
    const iscompleted=(id)=>{
        const completedTasks=task.map((ts)=>{
            if(ts.id===id){
                return {
                ...ts,
                completed:true
                }
            }
                return ts

        })
        setTask(completedTasks)

    }
    return(
        <div className="container">
            <h1 className="text-center text-info"
            >
                Todo-List</h1>

           <div className="input-group-text">
           <input type="text"
            className=" form-control form-control m-3" 
            value={inputValue} 
            onChange={handelInputs} 
            />
            <button 
            className="btn btn-primary  fs-5  btn-sm "
            onClick={addTask}

            ><i className="bi bi-plus-square"></i></button>
           </div>

            <h1 className="text-center fs-6">Active Tasks</h1>
            <ul className="container list-unstyled">
                {task.filter((tasks)=>!tasks.completed).map((t)=>{
                    return <li
                    key={t.id}
                    className="border border-1 p-1 m-1 d-flex justify-content-between align-items-center rounded"
                    >{t.text}
                   <div  className="rounded">
                   <button 
                    className="btn btn-danger mx-2"
                    >delete</button>
                    <button 
                    className="btn btn-success"
                    onClick={()=>iscompleted(t.id)}
                    >Done</button>
                   </div>
                    </li>
                })}
            </ul>
            <h1 className="text-center fs-6">Completed Tasks</h1>

            <ul className="container list-unstyled">
                {task.filter((t)=>t.completed).map((t)=>{
                    return <li
                    key={t.id}
                    className="border border-1 p-1 m-1 d-flex justify-content-between align-items-center"
                    >{t.text}
                   <div >
                   <button 
                    className="btn btn-danger"
                    >delete</button>
                    
                   </div>
                    </li>
                })}
            </ul>

        </div>
    )
}
export default TodoList;