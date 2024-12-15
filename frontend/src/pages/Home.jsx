import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos (reemplazar con llamada a API)
    setProducts([
      { id: 1, name: 'Producto 1', price: 10000, category: 'Ropa' },
      { id: 2, name: 'Producto 2', price: 5000, category: 'Libros' },
      // Agrega más productos de prueba
    ]);
  }, []);

  return (
    <div className="container mt-4">
      <h1>Productos</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
