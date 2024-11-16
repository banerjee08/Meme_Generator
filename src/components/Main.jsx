function Main(){
    return(
        <div className="container">
            <div className="input-container">
                <p className="top-text--heading">Top text</p>
                <p className="bottom-text--heading">Bottom text</p>
                <input className="top-text--input"></input>
                <input className="bottom-text--input"></input>
                <button className="btn">Get a new meme image</button>
            </div>

            <div className="meme-container">
                <img src="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3" className="meme--img"/>
                <p className="meme--top-text">Top Text</p>
                <p className="meme--bottom-text">And take my money</p>
            </div>

        </div>
    )
}

export default Main