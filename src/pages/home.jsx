import React, { useState } from "react"; // Import React and useState
import MovieCard from "../components/MovieCard";
import "../css/Home.css"; // Import the CSS file

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [ // Changed from 'movie' to 'movies' for clarity
        { id: "1", title: "John Wick", released_date: "2025" },
        { id: "2", title: "The Terminator", released_date: "2025" }, // Changed id to be unique
        { id: "3", title: "The Matrix", released_date: "2025" } // Changed id to be unique
    ];

    const handleSearch = (e) => { // Added 'e' parameter here
        e.preventDefault(); // Prevent default form submission
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && ( // Added case insensitivity 
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
        </div>
    );
}

export default Home;