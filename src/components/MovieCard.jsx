function MovieCard({movie}){

    function onFavoriteClick(){
        alter("favorite clicked")
    }

    return<div className="movie-card">
            <div className="movie-post">
                <img src={movie.url} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className={movie.title}></h3>
                <p className={movie.release_date}></p>
            </div>
        </div>
    
}

export default MovieCard;