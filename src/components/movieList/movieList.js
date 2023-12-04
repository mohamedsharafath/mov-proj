import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"



const MovieList = () => {
    


    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const [searchValue, setSearchValue] = useState('');

	const[done,setDone]=useState(false)

    const getData = () => {
        if(searchValue!=="")
        {
            setDone(true)
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${searchValue}`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))

        }
        else
        {
            fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
        }
    }

    return (
        <>
       <div className="search" style={{ display: 'flex', gap: '20px' }}>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} style={{ borderRadius: '10px', padding: '5px',height:'16px' }}></input>
        <button onClick={getData} style={{ borderRadius: '20px', padding: '5px 10px', backgroundColor: 'lightblue' }}>Search</button>
        </div>
        <div className="movie__list">
            
            {done ? <h2 className="list__title">SEARCH RESULTS</h2> :
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>}
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default MovieList
