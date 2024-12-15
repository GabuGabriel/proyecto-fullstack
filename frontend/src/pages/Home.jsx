import React from 'react';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../components/ShoppingCart';

const Home = () => {

  return (
    <div className="container-xxl vh-100 bg-warning p-4">
      <h1>Productos</h1>
      <div style={{ display: "flex" }} >
        <ProductCard />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Home;
