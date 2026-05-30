export default function Updatetodo(props) {
    return(
         <button 
            className="btn btn-success mx-2"
             onClick={props.updatedtask}
          >Update</button>
    )
}