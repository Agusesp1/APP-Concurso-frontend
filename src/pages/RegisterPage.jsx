// src/pages/RegisterPage.jsx
// Registro de usuario — Jockey Club de Rosario

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

const LOGO_URL =
  'https://tramites.jockeyclubderosario.com.ar/OFICINA_VIRTUAL_PROD_DOCS/JockeyLogo.png';

// ── Helpers ───────────────────────────────────────────────────────────────────
function getStrength(pwd) {
  let s = 0;
  if (pwd.length >= 8)          s++;
  if (/[A-Z]/.test(pwd))        s++;
  if (/[0-9]/.test(pwd))        s++;
  if (/[^A-Za-z0-9]/.test(pwd)) s++;
  return s;
}
const STRENGTH_LABELS = ['', 'Débil', 'Regular', 'Buena', 'Fuerte'];

// ── Componente ────────────────────────────────────────────────────────────────
function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    password:  '',
    confirm:   '',
  });

  const [errors,   setErrors]   = useState({});
  const [apiError, setApiError] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [showPass,    setShowPass]    = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const strength = getStrength(form.password);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'El nombre es obligatorio.';
    if (!form.lastName.trim())  e.lastName  = 'El apellido es obligatorio.';
    if (!form.email.trim())     e.email     = 'El correo es obligatorio.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Ingresá un correo válido.';
    if (!form.password)         e.password  = 'La contraseña es obligatoria.';
    else if (form.password.length < 8)
      e.password = 'Mínimo 8 caracteres.';
    if (!form.confirm)          e.confirm   = 'Confirmá tu contraseña.';
    else if (form.confirm !== form.password)
      e.confirm = 'Las contraseñas no coinciden.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setLoading(true);
    setApiError('');
    try {
      // TODO: await api.post('/auth/register', { ...form });
      await new Promise((r) => setTimeout(r, 1200));
      navigate('/');
    } catch (err) {
      setApiError(
        err.response?.data?.error || 'No se pudo completar el registro. Intentá de nuevo.'
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
        {apiError && (
          <div className="auth-alert" role="alert">
            <i className="bi bi-exclamation-circle-fill"></i>
            {apiError}
          </div>
        )}

        {/* ── Formulario ── */}
        <form onSubmit={handleSubmit} noValidate>

          {/* Nombre y Apellido */}
          <div className="auth-row">
            <div className="auth-field">
              <label className="auth-form-label" htmlFor="reg-firstName">Nombre</label>
              <input
                id="reg-firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="Juan"
                value={form.firstName}
                onChange={handleChange}
                disabled={loading}
                className={errors.firstName ? 'input-error' : form.firstName ? 'input-ok' : ''}
              />
              {errors.firstName && (
                <span className="auth-field__error">
                  <i className="bi bi-exclamation-circle"></i>{errors.firstName}
                </span>
              )}
            </div>

            <div className="auth-field">
              <label className="auth-form-label" htmlFor="reg-lastName">Apellido</label>
              <input
                id="reg-lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="García"
                value={form.lastName}
                onChange={handleChange}
                disabled={loading}
                className={errors.lastName ? 'input-error' : form.lastName ? 'input-ok' : ''}
              />
              {errors.lastName && (
                <span className="auth-field__error">
                  <i className="bi bi-exclamation-circle"></i>{errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-form-label" htmlFor="reg-email">
              Correo electrónico
            </label>
            <input
              id="reg-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="usuario@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              className={errors.email ? 'input-error' : form.email ? 'input-ok' : ''}
            />
            {errors.email && (
              <span className="auth-field__error">
                <i className="bi bi-exclamation-circle"></i>{errors.email}
              </span>
            )}
          </div>

          {/* Contraseña */}
          <div className={`auth-field ${errors.password ? 'auth-field--has-error' : ''}`}>
            <label className="auth-form-label" htmlFor="reg-password">Contraseña</label>
            <input
              id="reg-password"
              name="password"
              type={showPass ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="Mínimo 8 caracteres"
              value={form.password}
              onChange={handleChange}
              disabled={loading}
              style={{ paddingRight: '2.75rem' }}
              className={errors.password ? 'input-error' : form.password.length >= 8 ? 'input-ok' : ''}
            />
            <button
              type="button"
              className="auth-field__toggle"
              onClick={() => setShowPass((v) => !v)}
              disabled={loading}
              aria-label={showPass ? 'Ocultar' : 'Mostrar'}
            >
              <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </button>
            {form.password && (
              <>
                <div className="strength-bar">
                  <div className="strength-bar__fill" data-level={strength}></div>
                </div>
                <span className="strength-bar__label">
                  Fortaleza: <strong>{STRENGTH_LABELS[strength]}</strong>
                </span>
              </>
            )}
            {errors.password && (
              <span className="auth-field__error">
                <i className="bi bi-exclamation-circle"></i>{errors.password}
              </span>
            )}
          </div>

          {/* Confirmar contraseña */}
          <div className={`auth-field ${errors.confirm ? 'auth-field--has-error' : ''}`}>
            <label className="auth-form-label" htmlFor="reg-confirm">
              Confirmar contraseña
            </label>
            <input
              id="reg-confirm"
              name="confirm"
              type={showConfirm ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="Repetí tu contraseña"
              value={form.confirm}
              onChange={handleChange}
              disabled={loading}
              style={{ paddingRight: '2.75rem' }}
              className={
                errors.confirm
                  ? 'input-error'
                  : form.confirm && form.confirm === form.password
                  ? 'input-ok'
                  : ''
              }
            />
            <button
              type="button"
              className="auth-field__toggle"
              onClick={() => setShowConfirm((v) => !v)}
              disabled={loading}
              aria-label={showConfirm ? 'Ocultar' : 'Mostrar'}
            >
              <i className={`bi ${showConfirm ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </button>
            {errors.confirm && (
              <span className="auth-field__error">
                <i className="bi bi-exclamation-circle"></i>{errors.confirm}
              </span>
            )}
          </div>

          <button
            id="register-submit-btn"
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading
              ? <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Registrando...</>
              : 'Crear cuenta'
            }
          </button>
        </form>

        {/* ── Pie ── */}
        <div className="auth-footer">
          <div className="auth-footer-divider">o</div>
          <span>
            ¿Ya tenés cuenta?{' '}
            <Link to="/" id="register-login-link">Iniciá sesión</Link>
          </span>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;
