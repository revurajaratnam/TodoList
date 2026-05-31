export default function Undotodo(props) {
  return(
    <button
    className="btn btn-secondary"
    onClick={props.undotask}
    >
        undo
    </button>
  )
}