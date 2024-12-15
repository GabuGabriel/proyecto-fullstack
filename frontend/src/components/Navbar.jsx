import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src="/gglogo.svg" alt="Logo" width="40" />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/profile">Mi Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/cart">Carro</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">Iniciar Sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/register">Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
