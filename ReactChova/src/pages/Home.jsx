import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/Logo.png"

const Home=()=>
{
    return(
    <Container className="mt-4">
        <div className="row justify-content-center">
            <h1 className="row justify-content-center mt-4">CeluChova</h1>
            <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '200px', height: '180px' }} />
            <h2 className="row mt-4 justify-content-center">Tu próximo teléfono esta acá!!</h2>
        </div>
    </Container>
    );
};

export default Home;