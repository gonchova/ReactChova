import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Logo from "../assets/Logo.png"
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() 
{
  const navigate = useNavigate();
  
  const [usuario, setUsuario] = useState('');

  const handleLogin = (e) => {
    
    e.preventDefault();
    
    if (!usuario)
    {
        Swal.fire({
            icon: 'error',
            title: 'Aviso',
            text: 'Debe ingresar un usuario válido.',
        });
        return;
    }

    localStorage.setItem('auth', 'true');
    
    localStorage.setItem('usuario', usuario);
    
    navigate('/productos');
        
  };

  return (
    <Container className="mt-4 pb-1" style={{ maxWidth: 400}}>
    <div className="row justify-content-center">
        <h1 className="row justify-content-center">CeluChova</h1>
        <img className="mt-4 rounded-circle " src={Logo} alt="Logo" style={{ width: '180px', height: '160px' }} />
        <h2 className="row justify-content-center mt-2 mb-2">Iniciar sesión</h2>
    </div>
        <Form>
            <Form.Group className="mb-3">
            <Form.Label id="id">Usuario</Form.Label>
            <Form.Control type="text"  onChange={e => setUsuario(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />
            </Form.Group>
            <div className="row justify-content-center mx-auto px-5 ">
                <Button type="submit" variant="info" onClick={handleLogin}>Ingresar</Button>
            </div>
        </Form>
    </Container>

  );
}