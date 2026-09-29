// src/components/NotFound/NotFound.jsx

import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <p className="not-found__title">La página que buscás no existe.</p>
      <Link to="/" className="not-found__btn" id="not-found-home-link">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
