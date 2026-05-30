export default function Donetodo(props) {
    return(
        <button 
    className="btn btn-success"
    onClick={props.iscompleted}
    >Done</button>
    )
}