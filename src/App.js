import { useEffect, useState } from 'react';
import movieList from './Assets/data.json'
import MovieTable from './Components/MovieTable';
import Search from './Components/Search';
const App = (props)=>{
    let searchOption = {
        filterValue : "",
        searchValue : ""
    }
    let [filtering,changeFiltering] = useState(searchOption);
    let [sortOption,changeSortOption] = useState("");
    let [curPage,changeCurPage] = useState(1);

    useEffect(()=>{
        changeCurPage(1);
    },[filtering,sortOption]);

    let filterMovieList = ()=>{
        if(filtering.filterValue && filtering.searchValue){
            return movieList.filter(x=>{
                let str = x[filtering.filterValue];
                if(!str){
                    return false;
                }
                str = str.toLowerCase();
                return str.startsWith(filtering.searchValue);
            })
        }
        return movieList;
    }
    let movieList2 = filterMovieList();
    if(sortOption){
        movieList2.sort((a,b)=>{
            if(sortOption === 'Title'){
                return a.Title.localeCompare(b.Title);
            }
            if(sortOption === 'Year'){
                return b.Year - a.Year;
            }
            if(sortOption ==='imdbRating'){
                return b.imdbRating - a.imdbRating;
            }
            if(sortOption === 'BoxOffice'){
                if(!a.BoxOffice){
                    return 1;
                }
                if(!b.BoxOffice){
                    return -1;
                }
                a = a.BoxOffice.replace(/\D/g,'');
                b = b.BoxOffice.replace(/\D/g,'');
                return b-a;
            }
        })
    }
    
    return (
        <div style={{position:"relative"}} className="container">
            <h3>MovieList</h3>
            <Search filterObj={{filtering,changeFiltering}}></Search>
            <MovieTable curPageInfo={{curPage,changeCurPage}} sortOption={{sortOption,changeSortOption}} movieList={movieList2}></MovieTable>
        </div>
    )
}
export default App;