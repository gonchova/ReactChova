import { Container } from 'react-bootstrap';

export default function Perfil() {
  const id  = localStorage.getItem('usuario');
  
  return (
    <Container className="mt-4">
      <h2>Perfil del Usuario</h2>
      <p>Bienvenido, {id}</p>
    </Container>
  );
}
