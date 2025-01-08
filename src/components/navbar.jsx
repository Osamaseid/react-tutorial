import { Link } from "react-router-dom";

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-logo">
          <link to="/">Movie-App</link>
        </div>
        <div className="navbar-links">
            <link to="/" className="nav-links">Home</link>
            <link to="/favorites" className="nav-links">Favorites</link>
        </div>
    </nav>
}

export default Navbar;