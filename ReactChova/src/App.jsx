import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import About from './pages/About';
import Contact from './pages/Contact';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import NuevoProducto from './pages/NuevoProducto'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Administracion from './pages/Administracion';
import RutaProtegida from './components/RutaProtegida';
import { CartProvider } from './components/CartContext';
import { ProductsProvider } from './components/ProductsContext';
import EditarProducto from './pages/EditarProducto';


function App() {
  
 
   return (
    <div className="mb-5 pb-5">
      <ProductsProvider>
       <CartProvider>
        
        <Router>
          <Header />
          <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/productos' element={<Productos/>  }/>
                <Route path='/ofertas' element={<Ofertas precioOferta = {250}/>}  />
                <Route path='/about' element={<About/>}  />
                <Route path='/contact' element={<Contact/>}  />
                <Route path="/login" element={<Login />} />

                <Route path="/admin" element={
                  <RutaProtegida> <Administracion /> </RutaProtegida>
                } />

                <Route path="/createproducto" element={
                  <RutaProtegida> <NuevoProducto /> </RutaProtegida>
                } />


                <Route path="/editproducto/:idProducto" element={
                  <RutaProtegida> <EditarProducto /> </RutaProtegida>
                } />

                <Route path="/perfil/:id" element={
                  <RutaProtegida> <Perfil /> </RutaProtegida>
                } />
                <Route path='/carrito' element={
                      <Carrito/>
                  }/>
          </Routes>
        </Router>
        </CartProvider>
        </ProductsProvider>
        <Footer/>
    </div>
  )

}

export default App
