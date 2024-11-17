function Main(props){
    console.log(props)
    return(
        <div className="container">
            <div className="input-container">
                <p className="top-text--heading">Top text</p>
                <p className="bottom-text--heading">Bottom text</p>
                <input 
                    className="top-text--input"
                    type="text"
                    placeholder="Top text"
                    onChange={props.handleChange}
                    name="topText"
                    value={props.memeData.topText}
                >

                </input>
                <input 
                    className="bottom-text--input"
                    type="text"
                    placeholder="Bottom text"
                    onChange={props.handleChange}
                    name="bottomText"
                    value={props.memeData.bottomText}
                >

                </input>
                <button 
                    className="getImg-btn"
                    onClick={props.handleClick}
                >
                    Get a new meme image
                </button>
                <button 
                    className="reset-btn"
                    onClick={props.reset}
                >
                    Reset Meme
                </button>
            </div>

            <div className="meme-container">
                <img src={props.memeData.randomImg} className="meme--img"/>
                <p className="meme--top-text">{props.memeData.topText}</p>
                <p className="meme--bottom-text">{props.memeData.bottomText}</p>
            </div>

        </div>
    )
}

export default Main