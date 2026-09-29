// src/pages/LoginPage.jsx
// Inicio de sesión — Jockey Club de Rosario

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

const LOGO_URL =
  'https://tramites.jockeyclubderosario.com.ar/OFICINA_VIRTUAL_PROD_DOCS/JockeyLogo.png';

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm]       = useState({ email: '', password: '' });
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setError('');
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Completá todos los campos.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // TODO: await api.post('/auth/login', form);
      await new Promise((r) => setTimeout(r, 1200));
      navigate('/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.error || 'Credenciales incorrectas. Intentá de nuevo.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* ── Cabecera ── */}
        <header className="auth-header">
          <img
            src={LOGO_URL}
            alt="Jockey Club de Rosario"
            className="auth-logo"
          />
          <h1 className="auth-title">Inscripción a Concurso</h1>
          <p className="auth-subtitle">Jockey Club de Rosario</p>
        </header>

        <div className="auth-divider" />

        {/* ── Error global ── */}
        {error && (
          <div className="auth-alert" role="alert">
            <i className="bi bi-exclamation-circle-fill"></i>
            {error}
          </div>
        )}

        {/* ── Formulario ── */}
        <form onSubmit={handleSubmit} noValidate>

          <div className="auth-field">
            <label className="auth-form-label" htmlFor="login-email">
              Correo electrónico
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="usuario@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="auth-field">
            <label className="auth-form-label" htmlFor="login-password">
              Contraseña
            </label>
            <input
              id="login-password"
              name="password"
              type={showPass ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              disabled={loading}
              style={{ paddingRight: '2.75rem' }}
              required
            />
            <button
              type="button"
              className="auth-field__toggle"
              onClick={() => setShowPass((v) => !v)}
              disabled={loading}
              aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </button>
          </div>

          <button
            id="login-submit-btn"
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading
              ? <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Ingresando...</>
              : 'Iniciar sesión'
            }
          </button>
        </form>

        {/* ── Pie ── */}
        <div className="auth-footer">
          <div className="auth-footer-divider">o</div>
          <span>
            ¿No tenés cuenta?{' '}
            <Link to="/register" id="login-register-link">Registrate aquí</Link>
          </span>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
