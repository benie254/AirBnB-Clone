export default function Joke(props) {
    return (
        <div>
            <h3>{props.setup && <span>{props.setup}</span>} {!props.setup && <span>Punchline:</span>}</h3>
            {/* Alternatively: */}
            {/* <h3 style={{display: setup ? "block" : "none"}}>{setup}</h3> */}
            <p>{props.punchline}</p>
            <p>{props.rating}</p>
            <hr />
        </div>
    )
}