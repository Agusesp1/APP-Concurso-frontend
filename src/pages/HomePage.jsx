// src/pages/HomePage.jsx — Página de inicio

function HomePage() {
  return (
    <div className="text-center py-5">
      {/* Hero */}
      <div className="py-5">
        <i className="bi bi-trophy-fill display-1 text-primary"></i>
        <h1 className="display-4 fw-bold mt-3">Bienvenido a APP Concurso</h1>
        <p className="lead text-muted">
          Plataforma para la gestión y seguimiento de concursos.
        </p>
        <a href="/about" className="btn btn-primary btn-lg mt-3">
          <i className="bi bi-arrow-right-circle me-2"></i>
          Conocer más
        </a>
      </div>

      {/* Cards de características */}
      <div className="row g-4 mt-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <i className="bi bi-people-fill display-5 text-primary mb-3"></i>
              <h5 className="card-title">Participantes</h5>
              <p className="card-text text-muted">
                Gestiona los participantes del concurso de manera sencilla.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <i className="bi bi-bar-chart-fill display-5 text-success mb-3"></i>
              <h5 className="card-title">Resultados</h5>
              <p className="card-text text-muted">
                Visualiza puntajes y resultados en tiempo real.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <i className="bi bi-gear-fill display-5 text-warning mb-3"></i>
              <h5 className="card-title">Configuración</h5>
              <p className="card-text text-muted">
                Personaliza las reglas y categorías del concurso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
