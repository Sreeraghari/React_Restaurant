import './App.css';
import Navbr from './components/Navbar';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Navbr />
    <main className='py-3'>
      <Routes>
        <Route path='/' element={    <Home />} ></Route>
        <Route path='restaurant/:id' element={ <RestaurantDetails />} />
      </Routes>
    </main>
    </Router>
  );
}

export default App;
