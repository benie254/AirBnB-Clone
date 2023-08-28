export default function Joke({setup, punchline, rating, isPun, comments}) {
    return (
        <div>
            <h3>{setup && <span>{setup}</span>} {!setup && <span>Punchline:</span>}</h3>
            {/* Alternatively: */}
            {/* <h3 style={{display: setup ? "block" : "none"}}>{setup}</h3> */}
            <p>{punchline}</p>
            <p>{rating}</p>
            <p>{isPun && <span>{isPun}</span>}</p>
            <hr />
        </div>
    )
}