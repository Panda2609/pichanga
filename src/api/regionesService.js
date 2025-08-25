// Servicio para regiones
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export async function getRegiones() {
  const res = await fetch(`${API_URL}/api/regiones`);
  if (!res.ok) throw new Error('Error al obtener regiones');
  const data = await res.json();
//   console.log("data:", data);
  return data;
}

export async function getRegionById(id) {
  const res = await fetch(`${API_URL}/api/regiones/${id}`);
  if (!res.ok) throw new Error('Error al obtener la región');
  return res.json();
}
