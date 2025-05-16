import React from "react";
import { Container, Table, Row, Button } from "react-bootstrap";
import Logo from "../assets/Logo.png"

const Carrito=({items})=>
    {  
        return(
            <Container className="mt-4">
                <h1><u>Tu carrito:</u></h1>
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
                        !items.length ? (
                            <tr>  
                                <td colSpan={4}>Su carrito esta vacio</td>
                            </tr> 
                        ) : (
                        
                         items.map((item, index) => {            
                            var productos = JSON.parse(item);
                                return (    
                                    <tr key={index}>
                                        <td>{productos.id}</td>
                                        <td>{productos.title}</td>
                                        <td>${productos.price}</td>
                                        <td><Button variant="danger">Quitar</Button></td>
                                    </tr>
                                ) })
                        )    
                    }

                    </tbody>
                    </Table>
                    <div className="row my-4 justify-content-center">
                        <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '100px', height: '80px' }} />
                    </div>
            </Container>
        );
    };

export default Carrito;