import React, { useEffect, useState } from "react";
import { Container,Form, Button, Table } from 'react-bootstrap';
import Logo from "../assets/Logo.png"

export default function Administracion() {

   useEffect(()=>
          {
              // hacer el pedido de la api
              fetch('https://dummyjson.com/products/category/smartphones')
                  .then(res=>res.json())
                  .then(data=>{
                      setProductos(data.products);

              })
              .catch(err=>{
                  console.error("Error de carga de API",err);

              });
          },[]);
  
          const [productos, setProductos] = useState([]);

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
                                <td><Button variant="danger mx-1">Eliminar</Button>
                                <Button variant="danger mx-1 bg-warning">Editar</Button></td>
                            </tr>
                        ) })
                )    
            }

            </tbody>
            </Table>

            <Button variant="danger mx-1 bg-primary">Nuevo Producto</Button>

            <div className="row my-4 justify-content-center">
                <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '100px', height: '80px' }} />
            </div>
    </Container>

  );
}
