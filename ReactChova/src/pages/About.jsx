import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/Logo.png"

const About=()=>
    {
        return(
<Container className="mt-4">
    <h1>Sobre nosotros..</h1>
    <p><i>CeluChova es una empresa familiar fundada en 1999, cuando comenzaba el auge de la telefonía celular.<br/>
       En esos tiempos, el acceso a un celular era difícil para la persona promedio y es por lo cual decidimos convertirnos
       en un intermediario amigable para que todos puedan tener su propio telefono celular.<br/><br/>
       Nuestra misión es acercar a las personas la ultima tecnología celular, a un precio accesible.<br/><br/>
       </i>
    </p>
    <div className="row my-4 justify-content-center">
        <img className="mt-5 rounded-circle " src={Logo} alt="Logo" style={{ width: '200px', height: '180px' }} />
    </div>
</Container>
        );
    };

export default About;