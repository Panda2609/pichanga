// Servicio para regiones
const API_URL = "https://backend-466084083507.southamerica-west1.run.app/api/regiones";

export async function getRegiones() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener regiones');
  return res.json();
}

export async function getRegionById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Error al obtener la región');
  return res.json();
}
