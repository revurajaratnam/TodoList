import React from "react";

 export default function DeleteTask(props) {
    return(
        <button 
        className="btn btn-danger mx-2"
       onClick={props.delete} ><i className="bi bi-trash3-fill"></i></button>
    )
  
   
}