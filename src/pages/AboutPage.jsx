// src/pages/AboutPage.jsx — Página "Acerca de"

function AboutPage() {
  return (
    <div className="py-4">
      <h1 className="mb-4">
        <i className="bi bi-info-circle-fill text-primary me-2"></i>
        Acerca del proyecto
      </h1>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">
                <i className="bi bi-server me-2"></i>Backend
              </h5>
              <ul className="list-unstyled text-muted">
                <li><i className="bi bi-check2 text-success me-1"></i> Node.js + Express</li>
                <li><i className="bi bi-check2 text-success me-1"></i> Arquitectura MVC</li>
                <li><i className="bi bi-check2 text-success me-1"></i> API REST</li>
                <li><i className="bi bi-check2 text-success me-1"></i> CORS habilitado</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">
                <i className="bi bi-window me-2"></i>Frontend
              </h5>
              <ul className="list-unstyled text-muted">
                <li><i className="bi bi-check2 text-success me-1"></i> React 18 + Vite</li>
                <li><i className="bi bi-check2 text-success me-1"></i> Bootstrap 5</li>
                <li><i className="bi bi-check2 text-success me-1"></i> React Router v6</li>
                <li><i className="bi bi-check2 text-success me-1"></i> Axios para peticiones HTTP</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-info mt-4" role="alert">
        <i className="bi bi-lightbulb-fill me-2"></i>
        Este boilerplate está listo para ser extendido con tus propios módulos y páginas.
      </div>
    </div>
  );
}

export default AboutPage;
