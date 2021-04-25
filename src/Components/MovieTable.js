import { useState } from "react";
import FloatingInfo from "./FloatingInfo/FloatingInfo";
import Pagination from "./Paginations"

const MovieTable = (props)=>{
    let [movieInfo,changeMovieInfo] = useState(null);
    let getAllList = ()=>{
        let indexStart = ((props.curPageInfo.curPage-1) * 10);
        let indexEnd = (props.curPageInfo.curPage * 10);
        let realMovieList = props.movieList.slice(indexStart,indexEnd);
        return realMovieList.map((x,i)=>{
            return (
                <tr onClick={()=>{changeMovieInfo(x)}} key={i}>
                    <td>{x.Title}</td>
                    <td>{x.Year}</td>
                    <td>{x.BoxOffice}</td>
                    <td>{x.imdbRating}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table className="striped centered responsive-table">
            <thead>
                <tr>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("Title")}}>Title</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("Year")}}>Year</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("BoxOffice")}}>BoxOffice</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("imdbRating")}}>Imdb Rating</th>
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