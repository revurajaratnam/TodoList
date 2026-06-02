import React, { useState } from "react";
import DeleteTask from "./DeleteTask";
import Donetodo from "./DoneTask";
import Updatetodo from "./Update";
import Undotodo from "./UndoTask";
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
    const updatetodo=(id,text)=>{
        const updateTask=task.find((t)=>{
            return t.id === id;
        })
        setInputValue(updateTask.text)
        const remainingTasks = task.filter((t) => {
            return t.id !== id;
        });
        setTask(remainingTasks)
      
    }
    const undotodo=(id)=>{
        const Undotodi=task.map((t)=>{
           if(t.id=== id){
            return{
                ...t,
                completed:false
            }
           }
           return t;
        })
    setTask(Undotodi);
    }
    const activeTask=task.filter((t)=> !t.completed);
    const completedTask=task.filter((t)=> t.completed);


    return(
        <div className="container my-4 rounded" style={{boxSizing:"content-box", width:"500px", boxShadow:"1px 2px 30px 5px rgba(0,0,0,0.25", paddingBottom:"20px", paddingTop:"20px" } }>
            <div className="container">
            <h1 className="text-center text-primary fw-bold"
            >
                Todo-List</h1>

           <div className="input-group-text">
           <input type="text"
            className=" form-control form-control m-3" 
            value={inputValue} 
            onChange={handelInputs} 
            onKeyDown={(e)=>{if(e.key==="Enter") addTask()}}
            autoFocus
            placeholder="Add a new task..."
            />
            <button 
            className="btn btn-primary  fs-5  btn-sm "
            onClick={addTask}

            ><i className="bi bi-plus-square"></i></button>
           </div>
                { activeTask.length>0 && <h1 className="text-center text-success fs-6">Active Tasks</h1>}
                {task.length ===0 ?(
                    <h6 className="text-center text-secondary p-4"><i class="bi bi-file-earmark-excel-fill"></i>    No tasks found.!</h6>
                ):(
                    <div>
                        <ul className="container list-unstyled">
                {task.filter((tasks)=>!tasks.completed ).map((t)=>{
                    return <li
                    key={t.id}
                    className="border border-1 p-2  d-flex justify-content-between align-items-center rounded  "
                       style={{marginBottom:"10px"}}  >
                       <input type="checkbox" />   <b> {t.text}</b>
                   <div  className="rounded">
                    <DeleteTask delete={()=> deletetodo(t.id)} />
                    <Updatetodo updatedtask={()=> updatetodo(t.id)} />
                    <Donetodo iscompleted={()=>iscompleted(t.id)} />
                   </div>
                    </li>
                })}
            </ul>
           
            {completedTask.length>0 &&   <h1 className="text-center text-danger fs-6">Completed Tasks</h1>}
            <ul className="container list-unstyled">
                {task.filter((tasks)=>tasks.completed).map((t)=>{
                    return <li
                    key={t.id}
                    className="border border-1 p-1 m-1 d-flex justify-content-between align-items-center rounded"
                    ><s><span className="text-danger">{t.text}</span></s>
                   <div  className="rounded">
                    <DeleteTask delete={()=> deletetodo(t.id)} />
                    <Undotodo undotask={()=>undotodo(t.id)} />
                   </div>
                    </li>
                })}
            </ul>
                    </div>
                )}


            
        </div>
        </div>
    )
}