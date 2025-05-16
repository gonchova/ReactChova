import React, { useEffect, useState } from "react";
import { Container,Row, Col, Card, Button, Spinner } from "react-bootstrap";

const Ofertas=({cantItems, agregarItem, arrayItems, precioOferta})=>
    {
        useEffect(()=>
            {
                // hacer el pedido de la api
                fetch('https://dummyjson.com/products/category/smartphones')
                    .then(res=>res.json())
                    .then(data=>{
                        const datos = data.products.filter(reg => reg.price < precioOferta);
                        setProductos(datos);
                        setLoading(false);
                })
                .catch(err=>{
                    console.error("Error de carga de API",err);
                    setLoading(false);
                });
            },[precioOferta]);
            
            const [productos, setProductos] = useState([]);

            const agregarCarrito=(data)=>{
                
              var items = localStorage.getItem('data');
              var arrayjsons = [];
              
              if ( items != null )
                 arrayjsons =  JSON.parse(items);
    
              arrayjsons.push(JSON.stringify(data));
              
              localStorage.removeItem('data');
    
              cantItems = arrayjsons.length;
    
              agregarItem(cantItems);
    
              localStorage.setItem('data', JSON.stringify(arrayjsons));
                
              arrayItems(JSON.parse(JSON.stringify(arrayjsons)));
    
            }
      
            const [Loading, setLoading] = useState(true);

            return(
                <Container className='mt-4' >
                <h1><u>Ofertas imperdibles!</u></h1>
                <Row className="justify-content md-center">
                  { !Loading ? (
                  
                   (productos) && (productos.map(data=>(
                    <Col key={data.id} md={3}  className="p-2">
              
                      <Card className="m-2 h-100">
                        <Card.Img src={data.thumbnail} className="row mt-2"/>
                          <Card.Body >
                            <Card.Title>{data.title}</Card.Title>
                              <Card.Text className="row h-20 text-wrap">
                                  Descripcion: {data.description || 'N/A'}
                              </Card.Text>
                          </Card.Body>
                          <Card.Footer className="col mx-4 justify-content-center">
                              <div className="d-flex justify-content-center fw-bold">
                                {/* Precio: ${ !(data.price == '0.00') ? <div><s>{data.price}</s> {(data.price * 0.90).toFixed(2)}</div> : 'Consulte' }  */}
                                Precio: ${ !(data.price == '0.00') ? data.price : 'Consulte' }  
                              </div>
                              <div className="d-flex justify-content-center">
                                <Button className="d-flex justify-content-center my-2" onClick={()=>agregarCarrito(data)}>Agregar al Carrito</Button>
                              </div>
                          </Card.Footer>  
                        </Card>
  
                    </Col>)))):(<Spinner animation="border" variant="info"> </Spinner>) 
                }
                </Row>
               </Container>
            );
    };

export default Ofertas;