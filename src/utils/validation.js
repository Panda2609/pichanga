// utils/validation.js

export function validateEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) return 'Ingresa tu correo.';
  if (!re.test(email)) return 'Correo inválido.';
  return '';
}

export function validatePassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!password) return 'Ingresa tu contraseña.';
  if (!re.test(password)) return 'Contraseña débil.';
  return '';
}

export function validateName(name) {
  if (!name || name.trim().length === 0) return 'Ingresa tu usuario.';
  if (name.trim().length < 3) return 'Mínimo 3 caracteres.';
  return '';
}

export function validatePasswordMatch(password, confirmPassword) {
  if (!confirmPassword) return 'Confirma tu contraseña.';
  if (password !== confirmPassword) return 'No coinciden.';
  return '';
}
