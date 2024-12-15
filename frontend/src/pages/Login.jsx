/* import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginData } from '../assets/mockdata';

const Login = () => {
  const [email, setEmail] = useState(loginData.email);
  const [password, setPassword] = useState(loginData.password);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login simulada
    console.log('Login intento:', email);
    // En futuras iteraciones, aquí iría la validación real
    navigate('/profile');
  };
  return (
    <Container className="mt-5">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
 */