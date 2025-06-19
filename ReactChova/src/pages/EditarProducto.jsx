import React, {useState, useEffect, useContext} from "react";
import { ProductContext } from "../components/ProductsContext";
import { Container, Form, Button, Row } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";

export default function EditarProducto()
{  

    const {productos, editarProducto} = useContext(ProductContext); 
    const {idProducto} = useParams();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio ] = useState('');
    
    const navigate = useNavigate();
    
    useEffect(()=>
    {
        let editProducto = productos.filter(obj => obj.id == idProducto);
        
        if (editProducto)
        {         
            setNombre(editProducto[0].title);
            setDescripcion(editProducto[0].description);
            setPrecio(editProducto[0].price);
        }
       
    },[productos]);


    const EditarProducto = (e) =>
    {
        //validaciones
        e.preventDefault(); 

        if (!nombre || !descripcion) 
        {
            Swal.fire({
                icon: 'error',
                title: 'Aviso',
                text: 'Debe cargar todos los datos obligatorios.',
            });
            return;
        }
        
        if( precio <= 0)
        {
            Swal.fire({
                icon: 'error',
                title: 'Aviso',
                text: 'Debe cargar precio válido del producto.',
            });
            return;
        }

        
        if (editarProducto(idProducto, nombre, descripcion, precio))
        {
         Swal.fire({
            icon: 'success',
            title: 'Producto editado correctamente..',
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar"
          }).then((result) => {
            if (result.isConfirmed) {

                setNombre('');
                setDescripcion('');
                setPrecio('');
        
                navigate('/admin');
            }
          });
        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Aviso',
                text: 'Ocurrió un error editando el producto.',
            });
            
        }
    }


    return (
        
        <Container className="mt-5" style={{ maxWidth: 400 }}>
        <div className="row justify-content-center">
            <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '80px', height: '50px' }} />
            <h2 className="row justify-content-center mt-4 mb-4">Editar Producto</h2>
        </div>
            <Form >
                <Form.Group className="mb-3">
                <Form.Label id="id">Nombre/Titulo producto</Form.Label>
                <Form.Control type="text" placeholder="ingrese titulo" onChange={e => setNombre(e.target.value)}  value={nombre}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label id="id">Descripcion</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="ingrese descripcion" onChange={e => setDescripcion(e.target.value)} value={descripcion}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number"  onChange={e => setPrecio(e.target.value)} value={precio}/>
                </Form.Group>

                <Row className="justify-content-center mx-5 ">
                    <Button variant="info" className="mx-6 w-50"onClick={(e)=>EditarProducto(e)}>Guardar</Button>
                    <Button variant="danger mx-1 bg-danger" className="mx-4 my-2 w-50" onClick={()=>{navigate('/admin')}}>Cancelar</Button>
                </Row>
            </Form>
        </Container>
      );

}