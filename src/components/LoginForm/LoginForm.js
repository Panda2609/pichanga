import React, { useState } from 'react';
import './LoginForm.css';
import { validateEmail, validatePassword } from '../../utils/validation';

function LoginForm({ onLogin, onShowRegister }) {
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación externa
    const newErrors = {};
    const usernameError = validateEmail(username);
    const passwordError = validatePassword(password);
    if (usernameError) newErrors.username = usernameError;
    if (passwordError) newErrors.password = passwordError;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setErrors({});
    onLogin(username, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <label className='filter-label-login' htmlFor='input'>Email:</label>
      <input
        id='input'
        type="text"
        placeholder="juanperez@gmail.com"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
  {errors.username && <span className='error'>{errors.username}</span>}
      <label className='filter-label-login' htmlFor='input'>Contraseña</label>
      <input
        id='input'
        type="password"
        placeholder="Ingresa una contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
  {errors.password && <span className='error'>{errors.password}</span>}
      <button type="submit">Entrar</button>
      <hr className='divider'/>
      <p className='question'>¿No tienes una cuenta?</p>
      <button type="button" onClick={onShowRegister}>Regístrate</button>
    </form>
  );
}

export default LoginForm;
