// Servicio para canchas
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export async function getCanchas() {
  const res = await fetch(`${API_URL}/api/canchas`);
  if (!res.ok) throw new Error('Error al obtener canchas');
  const data = await res.json();
  console.log("data:", data);
  return data;
}

export async function getCanchaById(id) {
  const res = await fetch(`${API_URL}/api/canchas/${id}`);
  if (!res.ok) throw new Error('Error al obtener la cancha');
  return res.json();
}
