// src/App.jsx — Componente raíz: configura el router y la estructura general

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import HomePage    from './pages/HomePage';
import AboutPage   from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar persistente en todas las rutas */}
      <Navbar />

      {/* Contenido principal */}
      <main className="container my-4">
        <Routes>
          <Route path="/"       element={<HomePage />} />
          <Route path="/about"  element={<AboutPage />} />
          {/* Agregar nuevas páginas aquí */}
          <Route path="*"       element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer persistente */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
