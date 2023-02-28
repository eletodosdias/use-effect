const Articolo = (props) => {

    return(
        <>
            <h1> {props.post.title} </h1>
            <p> {props.post.summary} </p>
            <button onClick={props.tornaIndietro}>Indietro</button>
        </>
    )
}

export default Articolo;