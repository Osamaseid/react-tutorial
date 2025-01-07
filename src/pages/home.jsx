import MovieCard from "../components/MovieCard";

function Home(){
    const movie =[
        {id: "1", title :"the matrix", released_date:"2025"},
        {id: "1", title :"the matrix", released_date:"2025"},
        {id: "1", title :"the matrix", released_date:"2025"}
    ];

    const handleSearch = () => {};

    return(
        <div className="home">

            <form onSubmit = {handleSearch} className="search-form">
                <input
                type= "text"
                placeholder="search for movies..."
                className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="home-grid">
                {movie.map((movie) => (
                    <MovieCard movie = {movie} key={movie.id} />
                ))}
            </div>
    </div>
    );

}

export default Home;