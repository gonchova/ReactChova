import React, {useState, useEffect, useContext} from "react";
import { ProductContext } from "../components/ProductsContext";
import { Container, Form, Button } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import Swal from 'sweetalert2';

export default function NuevoProducto()
    {  

    const {productos, agregarProducto} = useContext(ProductContext); 
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    
    
     useEffect(()=>
      {
          // hacer el pedido de la api
          fetch('https://dummyjson.com/products/category/smartphones')
              .then(res=>res.json())
              .then(data=>{
                setProductoImagen(data.products);

          })
          .catch(err=>{
              console.error("Error de carga de API",err);

          });
      },[]);

    const [productoImagen, setProductoImagen] = useState([]);
   

    const nuevoProducto = (e) =>
    {
        //validaciones
        e.preventDefault(); 

        if (!nombre || !descripcion || !productoImagen) 
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


        //obtengo imagen random
        const min = Math.ceil(1);
        const max = Math.floor(15);
        const id = Math.floor(Math.random() * (15 - min + 1)) + min;

        const newProducto = 
        {   
            title: nombre,
            thumbnail: productoImagen[id].thumbnail,
            description: descripcion,
            price: parseFloat(precio)
        }

        agregarProducto(newProducto);

        Swal.fire({
            icon: 'success',
            title: 'Nuevo producto',
            text: `Producto creado correctamente..`,
        });
        
        setNombre('');
        setDescripcion('');
        setPrecio('');

        return true;


    }


    return (
        
        <Container className="mt-5" style={{ maxWidth: 400 }}>
        <div className="row justify-content-center">
            <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '80px', height: '50px' }} />
            <h2 className="row justify-content-center mt-4 mb-2">Nuevo Producto</h2>
        </div>
            <Form >
                <Form.Group className="mb-3">
                <Form.Label id="id">Nombre/Titulo producto</Form.Label>
                <Form.Control type="text" placeholder="ingrese titulo" onChange={e => setNombre(e.target.value)}  value={nombre}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label id="id">Descripcion</Form.Label>
                <Form.Control type="text" placeholder="ingrese descripcion" onChange={e => setDescripcion(e.target.value)} value={descripcion}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number"  onChange={e => setPrecio(e.target.value)} value={precio}/>
                </Form.Group>
                <div className="row justify-content-center mx-auto px-5 ">
                    <Button variant="info" onClick={(e)=>nuevoProducto(e)}>Agregar</Button>
                </div>
            </Form>
        </Container>
      );

    }