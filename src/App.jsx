import './App.css';
import MovieCard from './components/MovieCard'
import Home from './pages/home';

function App() {

  return (
    <>
       <MovieCard movie = {{title : "tim tom", release_date : "2025"}}/>
       <Home />

    </>
  );
}

export default App
