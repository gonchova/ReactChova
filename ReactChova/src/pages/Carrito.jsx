import React from "react";
import { Container, Table, Row, Button } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const Carrito=({items})=>
    {  

    const navigate = useNavigate();

    const isAuth = localStorage.getItem('auth') === 'true';
  
    const confirmarPedido = (e) => 
    {

      let table = e.target.parentElement;        
      let tbody = table.querySelector("tbody");
   
      if (!tbody) 
      {
         Swal.fire({
             icon: 'error',
             title: 'Aviso',
             text: 'Debe seleccionar articulos para su carrito.',
         });
         return;
       }
        
      if(items.length == 0)
      {
        Swal.fire({
            icon: 'error',
            title: 'Aviso',
            text: 'Debe seleccionar articulos para su carrito.',
        });
        return;
      }

      if(isAuth)  
      {  
        Swal.fire({
            icon: 'success',
            title: 'Compra procesada.',
            text: `Gracias por su Compra!.`,
        });

        navigate('/productos');
        return;
       }
       else
       {
        
        Swal.fire({
            icon: 'error',
            title: 'Aviso',
            text: 'Debe estar logueado para procesar su pedido.',
        });

        navigate('/login');
        return;
    
       }
    };

    const vaciarCarrito= (e)=>
    {   
        // Recargo pantalla para limpiar el carrito (TODO- Se desloguea)
        window.location.reload();
        // localStorage.removeItem('data');
        // let table = e.target.parentElement;        
        // let tbody = table.querySelector("tbody");
        // if (tbody) 
        //   tbody.innerHTML = ""; 

    }

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

                    <Button className="mx-2 mt-4" variant="success" onClick={confirmarPedido}>Confirma pedido</Button>

                    <Button className="mx-2 mt-4" variant="secondary" onClick={vaciarCarrito}>Vaciar Carrito</Button>   

                    <div className="row my-4 justify-content-center">
                        <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '100px', height: '80px' }} />
                    </div>




            </Container>
        );
    };

export default Carrito;