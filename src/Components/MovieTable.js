import { useState } from "react";
import FloatingInfo from "./FloatingInfo/FloatingInfo";
import Pagination from "./Paginations"
import './../Main.css'
const MovieTable = (props)=>{
    let [movieInfo,changeMovieInfo] = useState(null);
    let getAllList = ()=>{
        let indexStart = ((props.curPageInfo.curPage-1) * 10);
        let indexEnd = (props.curPageInfo.curPage * 10);
        let realMovieList = props.movieList.slice(indexStart,indexEnd);
        return realMovieList.map((x,i)=>{
            return (
                <tr onClick={()=>{changeMovieInfo(x)}} key={i}>
                    <td className="tb-item tbtitle">{x.Title}</td>
                    <td className="tb-item tbyear">{x.Year}</td>
                    <td className="tb-item tbboxoffice">{x.BoxOffice}</td>
                    <td className="tb-item tbimdb">{x.imdbRating}</td>
                </tr>
            )
        })
    }
    return (
        <div className="table-movie">
            <table className="mytable striped centered">
            <thead>
                <tr>
                    <th className="tb-item tbtitle" style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("Title")}}>Title</th>
                    <th className="tb-item tbyear" style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("Year")}}>Year</th>
                    <th className="tb-item tbboxoffice" style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("BoxOffice")}}>BoxOffice</th>
                    <th className="tb-item tbimdb" style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("imdbRating")}}>Imdb Rating</th>
                </tr>
            </thead>
                <tbody>
                    {getAllList()}
                </tbody>
            </table>
            <Pagination pageinfo={props.curPageInfo} movieList={props.movieList}></Pagination>     
            {movieInfo?<FloatingInfo movieInfo={{movieInfo,changeMovieInfo}}></FloatingInfo>:null}
            
      </div>
    )
}
export default MovieTable;