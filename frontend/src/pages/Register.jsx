import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { registrationData } from '../assets/mockdata';

const Register = () => {
  const [username, setUsername] = useState(registrationData.username);
  const [email, setEmail] = useState(registrationData.email);
  const [password, setPassword] = useState(registrationData.password);
  const [confirmPassword, setConfirmPassword] = useState(registrationData.confirmPassword);
  const [profileImage, setProfileImage] = useState(registrationData.profileImage);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Lógica de registro simulada
    console.log('Registro:', {
      username,
      email,
      password,
      profileImage,
    });

    // Redirigir al perfil después del registro
    navigate('/profile');
  };

  return (
    <Container className="container-fluid bg-warning p-4">
      <h2>Registro de Usuario</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen de Perfil</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
