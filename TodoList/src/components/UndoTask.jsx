export default function Undotodo(props) {
  return(
    <button
    className="btn btn-secondary"
    onClick={props.undotask}
    >
       <i className="bi bi-arrow-counterclockwise"></i>
    </button>
  )
}