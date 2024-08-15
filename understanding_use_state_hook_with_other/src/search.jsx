
import { useState, useEffect } from 'react';
import './search.css'
import Data from './movies_data.json'

function Search() {

    const [query, setQuery] = useState("")

    // use effect to clear the search bar when we refresh
    useEffect(() => {
        setQuery("");
    }, []); // The empty array ensures this runs only once when the component mounts

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Query: ${query}`)
    };

    return (
        <>
            <h1>This is the search page. We'll use useState Hook here for understanding</h1>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder="Enter The Title Of Movie"
                    id="movie-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type='submit'>Serach</button>
            </form>
            <div>
                <h3>
                    {query ? `Your search query was: ${query}` : "You did not enter any search query"}
                </h3>
            </div>
            <div className="card-group">
                {
                    Data.length && Data.filter((movie) => {
                        // movie here is the movie dictionary in the list of the data
                        if (query === "") {
                            // if query is empty
                            return null
                        } else if ((typeof movie.name === 'string') && (movie.name.toLowerCase().includes(query.toLowerCase()))) {
                            return movie
                        }
                    }).map((movie) => (
                        <>
                            <div className="card">
                                <h3>Title: {movie.name}</h3>
                                <p>Release Date: {movie.release_date}</p>
                                <p>Director: {movie.director}</p>
                                <p>Genre: {movie.genre}</p>
                                <p>Adult: {movie.adult ? "Yes" : "No"}</p>
                                <p>Rating: {movie.rating}</p>
                            </div>
                        </>
                    ))}
            </div>
        </>
    )
}

export default Search;
