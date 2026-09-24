// src/components/Footer.jsx
// Pie de página simple

function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-5">
      <small>
        <i className="bi bi-trophy-fill me-1"></i>
        APP Concurso &copy; {new Date().getFullYear()} — Todos los derechos reservados
      </small>
    </footer>
  );
}

export default Footer;
