-- Create database
CREATE DATABASE marketplacedb;

-- Connect to the database
\c marketplacedb;

-- Create categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Insert predefined categories
INSERT INTO categories (name) VALUES 
    ('Ropa'),
    ('Calzado'),
    ('Electrónica de consumo'),
    ('Libros, películas, música y juegos'),
    ('Cuidado personal y belleza'),
    ('Alimentos y bebidas');

-- Tabla de usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    profile_image TEXT
);

-- Tabla de productos
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    user_id INT REFERENCES users(id),
    image TEXT
);

-- Tabla de favoritos
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id),
    UNIQUE(user_id, product_id)
);

-- Tabla de carrito de compras
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL CHECK (quantity > 0)
);
