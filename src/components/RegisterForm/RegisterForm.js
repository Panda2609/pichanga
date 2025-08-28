import React, { useState } from 'react';
import './RegisterForm.css';
import { validateEmail, validatePassword, validateName, validatePasswordMatch } from '../../utils/validation';

function RegisterForm({ onRegister, onShowLogin }) {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación externa
    const newErrors = {};
    const usernameError = validateName(form.username);
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    const confirmPasswordError = validatePasswordMatch(form.password, form.confirmPassword);
    if (usernameError) newErrors.username = usernameError;
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setErrors({});
    onRegister(form);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <label className='filter-label-login' htmlFor='input'>Usuario:</label>
      <input
        id='input'
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={form.username}
        onChange={handleChange}
        required
      />
  {errors.username && <span className='error' style={{ color: 'red', fontSize: '0.95em', marginBottom: '0.3em', display: 'block', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{errors.username}</span>}
      <label className='filter-label-login' htmlFor='input'>Email:</label>
      <input
        id='input'
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
  {errors.email && <span className='error' style={{ color: 'red', fontSize: '0.95em', marginBottom: '0.3em', display: 'block', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{errors.email}</span>}
      <label className='filter-label-login' htmlFor='input'>Contraseña:</label>
      <input
        id='input'
        type="password"
        name="password"
        placeholder="Ingresa una contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
  {errors.password && <span className='error' style={{ color: 'red', fontSize: '0.95em', marginBottom: '0.3em', display: 'block', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{errors.password}</span>}
      <label className='filter-label-login' htmlFor='input'>Confirmar contraseña:</label>
      <input
        id='input'
        type="password"
        name="confirmPassword"
        placeholder="Ingresa de nuevo la contraseña"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />
  {errors.confirmPassword && <span className='error' style={{ color: 'red', fontSize: '0.95em', marginBottom: '0.3em', display: 'block', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{errors.confirmPassword}</span>}
      <button type="submit">Registrarse</button>
      <hr className='divider'/>
      <p className='question'>¿Ya tienes una cuenta?</p>
      <button type="button" onClick={onShowLogin}>Inicia sesión</button>
    </form>
  );
}

export default RegisterForm;
