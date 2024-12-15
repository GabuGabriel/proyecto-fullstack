import React from 'react';

const ProductCard = ({ product }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">Precio: ${product.price} CLP</p>
      <p className="card-text">Categoría: {product.category}</p>
      <button className="btn btn-primary">Ver Detalle</button>
    </div>
  </div>
);

export default ProductCard;