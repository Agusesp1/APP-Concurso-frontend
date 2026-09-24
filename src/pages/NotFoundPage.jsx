// src/pages/NotFoundPage.jsx — Página 404

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="text-center py-5">
      <i className="bi bi-exclamation-triangle-fill display-1 text-warning"></i>
      <h1 className="display-4 fw-bold mt-3">404</h1>
      <p className="lead text-muted">La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary mt-3">
        <i className="bi bi-house me-2"></i>Volver al inicio
      </Link>
    </div>
  );
}

export default NotFoundPage;
