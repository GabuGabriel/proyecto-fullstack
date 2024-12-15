/* import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Badge, Form, Alert } from 'react-bootstrap';
import { Star, StarFill, CartPlus } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { mockProducts, profileData, registrationData, loginData } from '../assets/mockdata';

const Detail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError('Producto no encontrado');
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    try {
      const productToAdd = {
        ...product,
        quantity: quantity
      };
      addToCart(productToAdd);
    } catch (err) {
      setError('No se pudo agregar el producto al carrito');
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // TODO: Implement actual favorite list functionality
    console.log(`Product ${id} ${isFavorite ? 'removed from' : 'added to'} favorites`);
  };

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!product) {
    return <Container className="text-center mt-5">Cargando...</Container>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <div className="position-relative">
            <Image
              src={product.image}
              fluid
              rounded
              style={{
                maxHeight: '500px',
                width: '100%',
                objectFit: 'cover'
              }}
            />
            <Button
              variant="link"
              className="position-absolute top-0 end-0 m-3"
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <StarFill color="gold" size={32} />
              ) : (
                <Star color="white" size={32} />
              )}
            </Button>
          </div>
        </Col>

        <Col md={6}>
          <h1>{product.name}</h1>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-success">${product.price.toFixed(2)}</h3>
            <Badge bg="secondary">
              Vendido por: {product.seller}
            </Badge>
          </div>

          <p className="text-muted">{product.description}</p>

          <div className="d-flex align-items-center mb-3">
            <Form.Label className="me-2 mb-0">Cantidad:</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              style={{ width: '80px' }}
            />
          </div>

          <Button
            variant="success"
            size="lg"
            onClick={handleAddToCart}
            className="w-100 mb-3"
          >
            <CartPlus className="me-2" /> Agregar al Carrito
          </Button>

          <div className="mt-4">
            <h5>Detalles del Producto</h5>
            <ul>
              {product.details && product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail; */