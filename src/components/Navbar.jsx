// src/components/Navbar.jsx
// Barra de navegación responsiva con Bootstrap

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        {/* Brand / Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <i className="bi bi-trophy-fill me-2"></i>
          APP Concurso
        </NavLink>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                <i className="bi bi-house-door me-1"></i>Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <i className="bi bi-info-circle me-1"></i>Acerca de
              </NavLink>
            </li>
            {/* Agregar más links aquí */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
