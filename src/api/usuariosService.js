// Servicio para usuarios
const API_URL = "https://backend-466084083507.southamerica-west1.run.app/api/usuarios";

export async function getUsuarios() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

export async function getUsuarioById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Error al obtener el usuario');
  return res.json();
}
