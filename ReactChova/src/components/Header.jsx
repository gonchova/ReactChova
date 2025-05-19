import React from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Carrito from "../assets/Carrito.svg";
import Logo from "../assets/Logo.png";

const NavBarPrincipal = ({items}) =>{

    const navigate = useNavigate();

    const isAuth = localStorage.getItem('auth') === 'true';
  
    const cerrarSesion = () => 
    {
      localStorage.removeItem('auth');
      navigate('/login');
    };

    return(
        <Navbar className="bg-secondary">
            <Container>
                <Navbar.Brand as={Link} to="/"><img className="rounded-circle" src={Logo} alt="Logo" style={{ width: '40px', height: '40px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                    <Badge bg="secondary">{items}</Badge>
                    </Nav.Link>
                </Nav>
                
                 <Nav>
                    {isAuth && (
                    <>
                        <Nav.Link className="mx-2 text-black bg-info rounded" as={Link} to="/perfil/DefaultUser">Perfil</Nav.Link>
                    
                        <Nav.Link className="mx-2 text-black bg-info rounded" as={Link} to="/admin">Administración</Nav.Link>
                    </>
                    )}
                </Nav>
                <s>-</s> 
                <Nav>
                    {/* Mostrar botón de login o logout según autenticación */}
                    {!isAuth ? (
                    <Nav.Link className="mx-2 text-black bg-success rounded" as={Link} to="/login">Login</Nav.Link>
                    ) : (
                    <Button className="mx-2" variant="warning" onClick={cerrarSesion}>Cerrar sesión</Button>
                    )}
                </Nav>
            </Container>
        </Navbar>

    );

};

export default NavBarPrincipal;