import './FloatingInfo.css'
const FloatingInfo = (props)=>{
    return (
        <div onClick={()=>props.movieInfo.changeMovieInfo(null)} className="FloatingWrapper">
            <div onClick={(e)=>{e.stopPropagation()}} className="FloatingBox">
                <div>
                    <h3>{props.movieInfo.movieInfo.Title}</h3>
                    <div className="floating_imagebox">
                        <img className="responsive-img" src={props.movieInfo.movieInfo.Poster}></img>
                    </div>
                    <ul className="collection">
                        <li className="collection-item">Director : {props.movieInfo.movieInfo.Title}</li>
                        <li className="collection-item">Writer : {props.movieInfo.movieInfo.Writer} </li>
                        <li className="collection-item">Genre : {props.movieInfo.movieInfo.Genre}</li>
                        <li className="collection-item">Language : {props.movieInfo.movieInfo.Language}</li>
                        <li className="collection-item">Actors : {props.movieInfo.movieInfo.Actors}</li>
                        <li className="collection-item">Released Date : {props.movieInfo.movieInfo.Released}</li>
                        <li className="collection-item">Country : {props.movieInfo.movieInfo.Country}</li>
                        <li className="collection-item">IMDBRating : {props.movieInfo.movieInfo.imdbRating}</li>
                    </ul>
                </div>
            </div>  
        </div>
    )
}
export default FloatingInfo;