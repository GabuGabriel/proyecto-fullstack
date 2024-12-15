import { useState } from "react";
import React from "react";
import { useCart } from "../context/CartContext";
import { StarFill, Star } from "react-bootstrap-icons";
import ShoppingCart from '../components/ShoppingCart';

const DetailProduct = () => {
  const { addToCart, removeFromCart } = useCart();

  const [isFavorite, setIsFavorite] = useState(false); // Estado para favoritos

  // Datos simulados para la tarjeta
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

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="container mt-2">
      <div className="card" style={{ maxWidth: "40rem", margin: "auto" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            <strong>Precio:</strong> ${product.price.toLocaleString("es-CL")}
          </p>
          <p className="card-text">
            <strong>Detalles:</strong> {product.description}
          </p>
          <p className="card-text">
            <strong>Categoría:</strong> {product.category}
          </p>
          <p className="card-text">
            <strong>Publicado por:</strong> {product.user.username}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div onClick={handleFavoriteToggle} style={{ cursor: "pointer" }}>
            {isFavorite ? (
              <StarFill color="gold" size={25} />
            ) : (
              <Star color="gray" size={25} />
            )}
          </div>
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
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default DetailProduct;
