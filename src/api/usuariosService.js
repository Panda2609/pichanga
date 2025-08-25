// Servicio para usuarios
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export async function getUsuarios() {
  const res = await fetch(`${API_URL}/api/usuarios`);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

export async function getUsuarioById(id) {
  const res = await fetch(`${API_URL}/api/usuarios/${id}`);
  if (!res.ok) throw new Error('Error al obtener el usuario');
  return res.json();
}
