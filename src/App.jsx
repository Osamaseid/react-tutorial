
import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/favorites';

function App() {

  return (
       <main className='main-content'>
        <Router>
          <Route path="/" element={<Home/>}/>
          <Route path="/Favorites" element={<Favorites/>}/>
        </Router>

       </main>

  );
}

export default App
