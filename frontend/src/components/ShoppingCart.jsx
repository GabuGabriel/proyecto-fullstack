import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ShoppingCart = () => {
  const { cartItems, clearCart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 1, // ID del producto para identificarlo en la vista de detalle
    name: "Auto Modelo 2024",
    image: "https://via.placeholder.com/300", // Imagen de prueba
    price: 10000000, // Precio en pesos chilenos
    description: "Auto modelo 2024 color rojo",
    category: "Vehículos",
    user: {
      username: "JuanPerez",
    },
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container-s p-2 m-2">
      <h2>Carro de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{item.name} <button
                    className="btn btn-primary mt-3 w-50"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Ver Detalles
                  </button></h5>
                  <p>
                    <strong>Precio:</strong> ${item.price.toLocaleString("es-CL")}
                  </p>
                  <p>
                    <strong>Cantidad:</strong> {item.quantity}
                  </p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-success ms-2"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                  <p>
                    <strong>Subtotal:</strong> $
                    {(item.price * item.quantity).toLocaleString("es-CL")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-end mt-4">
            <h4>
              <strong>Total:</strong> ${totalPrice.toLocaleString("es-CL")}
            </h4>
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/detail-total")}
            >
              Ir a Pagar
            </button>
            <button className="btn btn-danger mt-3 ms-3" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
