import React from 'react';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import About from './pages/About';
import Contact from './pages/Contact';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  
  const [cantItems, setcantItems] = useState(0);
  const [arrayItems, setarrayItems] = useState([]);

  //Manejo la recarga del browser para limpiar el localstorage, de modo de poder reiniciar la carga de carrito - (Solo para pruebas)
  useEffect( () => {
    window.addEventListener('beforeunload', localStorage.clear());
    return () => {
      window.removeEventListener('beforeunload', localStorage.clear());
    };
  }, []);

   return (
    <div className="mb-5">
        
        <Router>
          <Header items= {cantItems} />
          <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/productos' element={<Productos agregarItem = {setcantItems} arrayItems = {setarrayItems}/>  }/>
                <Route path='/ofertas' element={<Ofertas agregarItem = {setcantItems} arrayItems = {setarrayItems} precioOferta = {250}/>}  />
                <Route path='/about' element={<About/>}  />
                <Route path='/contact' element={<Contact/>}  />
                <Route path='/carrito' element={
                      <Carrito items = {arrayItems} />
                  }/>
          </Routes>
        </Router>
        <Footer/>
    </div>
  )

}

export default App
