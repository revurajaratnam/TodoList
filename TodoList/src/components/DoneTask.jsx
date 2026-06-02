export default function Donetodo(props) {
    return(
        <button 
    className="btn btn-success mx-2"
    onClick={props.iscompleted}
    ><i className="bi bi-check2-square"></i></button>
    )
}