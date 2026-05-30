import React, { useState } from "react";
import DeleteTask from "./DeleteTask";
import Donetodo from "./DoneTask";
import Updatetodo from "./Update";
 export default function TodoList(props) {
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
    const deletetodo=(id)=>{
       const deletedTask= task.filter((t)=>{
            return t.id!==id
        })
        setTask(deletedTask)
    }
    const updatetodo=(id)=>{
        const updateTask=task.map((t)=>{
            if(t.id===id){
                return{
                    ...t,
                    text:inputValue
                };
            }
            return t;
        })
        setTask(updateTask)
        setInputValue("")
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
                    <DeleteTask delete={()=> deletetodo(t.id)} />
                    <Updatetodo updatedtask={()=> updatetodo(t.id,t.text)} />
                     <Donetodo iscompleted={()=>iscompleted(t.id)} />
                   </div>
                    </li>
                })}
            </ul>
            <h1 className="text-center fs-6">Completed Tsasks</h1>
            <ul className="container list-unstyled">
                {task.filter((tasks)=>tasks.completed).map((t)=>{
                    return <li
                    key={t.id}
                    className="border border-1 p-1 m-1 d-flex justify-content-between align-items-center rounded"
                    >{t.text}
                   <div  className="rounded">
                    <DeleteTask delete={()=> deletetodo(t.id)} />
                     <Donetodo iscompleted={()=>iscompleted(t.id)} />
                   </div>
                    </li>
                })}
            </ul>
            

        </div>
    )
}