import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm({ onRegister, onShowLogin }) {
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
    // Aquí iría la lógica de registro
    if (form.password !== form.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    onRegister(form);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit">Registrarse</button>
      <hr className='divider'/>
      <p className='question'>¿Ya tienes una cuenta?</p>
      <button type="button" onClick={onShowLogin}>Inicia sesión</button>
    </form>
  );
}

export default RegisterForm;
