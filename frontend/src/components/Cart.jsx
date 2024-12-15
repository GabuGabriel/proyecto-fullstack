import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Card>
      <Card.Header>Carrito de Compras</Card.Header>
      <Card.Body>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <strong>Total:</strong>
              <span>${calculateTotal()}</span>
            </div>
            <Button variant="primary" className="w-100 mt-3">
              Comprar
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cart;