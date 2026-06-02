export default function Updatetodo(props) {
    return(
         <button 
            className="btn btn-warning mx-2"
             onClick={props.updatedtask}
          ><i className="bi bi-pencil-square"></i></button>
    )
}