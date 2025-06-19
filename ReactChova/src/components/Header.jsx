import React, {useContext} from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Carrito from "../assets/Carrito.svg";
import Logo from "../assets/Logo.png";
import { CartContext } from "./CartContext";

const NavBarPrincipal = () =>
{

    const navigate = useNavigate();

    const isAuth = localStorage.getItem('auth') === 'true';
  
    const cerrarSesion = () => 
    {
      localStorage.removeItem('auth');
      navigate('/login');
    };
    
    const {cantItems} = useContext(CartContext); 

    return(
        <Navbar className="bg-secondary mx-auto" expand="lg"> 
            <Container>
                <Navbar.Brand as={Link} to="/"><img className="rounded-circle" src={Logo} alt="Logo" style={{ width: '40px', height: '40px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                <Nav className="me-auto">
                    <Nav.Link className="text-white" as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/productos">Productos</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/ofertas">Ofertas</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/about">About</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link className="text-white" as={Link} to="/carrito">
                    <img src={Carrito} alt="Carrito"  style={{ width: '24px', height: '24px' }} />
                    <Badge bg="secondary">{cantItems}</Badge>
                    </Nav.Link>
                </Nav>
                
                 <Nav className="justify-content-center">
                    {isAuth && (
                    <>
                        <Nav.Link className="mx-2 my-1 w-auto text-black bg-info rounded justify-content-center" as={Link} to="/perfil/DefaultUser">Perfil</Nav.Link>
                    
                        <Nav.Link className="mx-2 my-1 w-auto text-black bg-info rounded justify-content-center" as={Link} to="/admin">Administración</Nav.Link>
                    </>
                    )}
                </Nav>
                <s>-</s> 
                <Nav>
                    {/* Mostrar botón de login o logout según autenticación */}
                    {!isAuth ? (
                    <Nav.Link className="mx-2 text-black bg-success rounded" as={Link} to="/login">Login</Nav.Link>
                    ) : (
                    <Button className="mx-2 w-auto" variant="warning" onClick={cerrarSesion}>Cerrar sesión</Button>
                    )}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

};

export default NavBarPrincipal;