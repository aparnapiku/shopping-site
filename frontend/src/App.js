import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import './styles/global.css';
import NavBar from './components/NavBar';
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Profile from './pages/profile';

function App() {
  return (
    <>
    <main>
    <NavBar/>
      <Routes>
        <Route path= "/" element= {<Home/>}/>
        <Route path= "/about" element= {<About/>}/>
        <Route path="/shop"  element= {<Shop/>}/>
        <Route path= "/cart" element= {<Cart/>}/>
        <Route path="/profile"  element= {<Profile/>}/>
      </Routes>
    </main>
    </>
    
  );
}

export default App;
