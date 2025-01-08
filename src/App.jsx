import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/favorites';
import Navbar from './components/navbar';

function App() {
    return (
        <div>
            <Navbar />
        <main className='main-content'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} /> 
            </Routes>
        </main>

       </div>
    );
}

export default App;