import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carrito from "../assets/Carrito.svg"
import Logo from "../assets/Logo.png"

const NavBarPrincipal = ({items}) =>{

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
            </Container>
        </Navbar>

    );

};

export default NavBarPrincipal;