import React, {useContext} from "react";
import { Container, Table, Button } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { CartContext } from "../components/CartContext";


const Carrito=()=>
{  

    const {cart, setCart, clearCart, deleteFromCart} = useContext(CartContext); 

    const navigate = useNavigate();
      
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
        
      if(cart.length == 0)
      {
        Swal.fire({
            icon: 'error',
            title: 'Aviso',
            text: 'Debe seleccionar articulos para su carrito.',
        });
        return;
      }


        Swal.fire({
            icon: 'success',
            title: 'Compra procesada.',
            text: `Gracias por su Compra!.`,
        });

        vaciarCarrito(false);
        navigate('/productos');
        return;

    };

    const vaciarCarrito= (confirmacion)=>
    {  
        if(confirmacion)
        {
        Swal.fire({
            title: "Aviso!",
            text: "¿Desea vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Vaciar"
          }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
            }
          });
        }
        else
        {
            clearCart();
        }
        

    }

    return(
        <Container className="mt-4">
            <h1><u>Tu carrito:</u></h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {   
                    !cart.length ? (
                        <tr>  
                            <td colSpan={5}>Su carrito esta vacio</td>
                        </tr> 
                    ) : (
                    
                    cart.map((item, index) => {            
                            return (    
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.price.toFixed(2) * item.cantidad.toFixed(2)}</td>
                                    <td><Button variant="danger" onClick={()=>deleteFromCart(item)}>Quitar</Button></td>
                                </tr>
                            ) })
                    )    
                }

                </tbody>

                </Table>

                <Button className="mx-2 mt-4" variant="success" onClick={confirmarPedido}>Confirma pedido</Button>

                <Button className="mx-2 mt-4" variant="secondary" onClick={()=>vaciarCarrito(true)}>Vaciar Carrito</Button>   

                <div className="row my-4 justify-content-center">
                    <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '100px', height: '80px' }} />
                </div>

        </Container>
    );
};

export default Carrito;