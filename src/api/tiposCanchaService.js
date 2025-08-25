// Servicio para tipos de cancha
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export async function getTiposCancha() {
  const res = await fetch(`${API_URL}/api/tiposcancha`);
  if (!res.ok) throw new Error('Error al obtener tipos de cancha');
  return res.json();
}

export async function getTipoCanchaById(id) {
  const res = await fetch(`${API_URL}/api/tiposcancha/${id}`);
  if (!res.ok) throw new Error('Error al obtener el tipo de cancha');
  return res.json();
}
