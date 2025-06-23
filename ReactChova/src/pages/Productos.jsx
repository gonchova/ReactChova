import React, { useContext } from "react";
import { Container,Row, Col, Card, Button , Spinner} from "react-bootstrap";
import { CartContext } from "../components/CartContext";
import { ProductContext } from "../components/ProductsContext";

const Productos=()=>
{
    
    const {addtoCart, cantItems, setCantItems} = useContext(CartContext); 
    const {productos, Loading} = useContext(ProductContext); 

    const agregarCarrito = (data)=>{
      
      addtoCart(data);

      setCantItems(cantItems+1)
    }

    return(
        <Container className="mt-4 mb-4">
        <h1><u>Teléfonos disponibles:</u></h1>
        <Row className="justify-content md-center">
          {!Loading ? ( 
            <>
            { (productos) && (productos.map(data=>(
            <Col key={data.id} md={3}  className="p-2">
              <Card className="m-2 h-100">
                <Row className="md-center">
                  <Card.Img src={data.thumbnail} className="row mt-2 mx-auto h-100"/>
                </Row>
                
                  <Card.Body className="h-100">
                    <Card.Title>{data.title}</Card.Title>
                      <Card.Text className="row h-20 text-wrap mx-auto">
                        Descripcion: {data.description || 'N/A'}
                      </Card.Text>
                  </Card.Body>
                  
                  <Card.Footer className="col mx-4 justify-content-center">
                      <div className="d-flex justify-content-center fw-bold">
                        Precio: ${ !(data.price == '0.00') ? data.price : 'Consulte' } 
                      </div>
                      <div className="d-flex justify-content-center">
                        <Button className="d-flex justify-content-center my-2" onClick={()=>agregarCarrito(data)}>Agregar al Carrito</Button>
                      </div>
                  </Card.Footer>  
                </Card>
            </Col>)
          ))}
        </>):(<Spinner animation="border" variant="info"> </Spinner>) 
          }</Row>
        </Container>
    );
};

export default Productos;