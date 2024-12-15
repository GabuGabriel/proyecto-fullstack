/* import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { profileData } from '../assets/mockdata';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>Mi Perfil</Card.Header>
        <Card.Body>
          <div className="text-center mb-4">
            <img
              src={profileData.profileImage}
              alt="Perfil"
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <h3 className="text-center">{profileData.name}</h3>
          <p className="text-center">{profileData.email}</p>
          <h4 className="mt-4">Mis Publicaciones</h4>
          <p>Aún no tienes publicaciones</p>
          <Button
            variant="primary"
            onClick={() => navigate('/create-publication')}
          >
            Crear Publicación
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
 */