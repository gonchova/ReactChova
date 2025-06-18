import React, { useEffect, useState, useContext } from "react";
import { Container,Form, Button, Table } from 'react-bootstrap';
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../components/ProductsContext";

export default function Administracion() {

    const {productos, setProductos, eliminarProducto} = useContext(ProductContext);
    const navigate = useNavigate();
        
    useEffect(()=>
    {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = ''; 
          };
        
        window.addEventListener('beforeunload', handleBeforeUnload);

        // hacer el pedido de la api
        fetch('https://dummyjson.com/products/category/smartphones')
            .then(res=>res.json())
            .then(data=>{
            if (productos.length == 0)
                setProductos(data.products);

        })
        .catch(err=>{
            console.error("Error de carga de API",err);
        });

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };

    },[]);
    
        
  return (

    <Container className="mt-4">
        <h1><u>Productos Existentes</u></h1>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {   
                !productos.length ? (
                    <tr>  
                        <td colSpan={4}>Su carrito esta vacio</td>
                    </tr> 
                ) : (
                
                  productos.map((item, index) => {            
                         return (    
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td><Button variant="danger mx-1" onClick={()=>eliminarProducto(item)}>Eliminar</Button>
                                    <Button variant="danger mx-1 bg-warning"  onClick={()=>{navigate('/editproducto/'+item.id)}}>Editar</Button>
                                </td>
                            </tr>
                        ) })
                )    
            }

            </tbody>
            </Table>

            <Button variant="danger mx-1 bg-primary" onClick={()=>{navigate('/createproducto/id')}}>Nuevo Producto</Button>

            <div className="row my-4 justify-content-center">
                <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '100px', height: '80px' }} />
            </div>
    </Container>

  );
}
