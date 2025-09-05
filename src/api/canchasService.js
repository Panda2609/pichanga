// Servicio para canchas
const API_BASE = "https://backend-466084083507.southamerica-west1.run.app";
const CANCHAS = "/api/canchas";
const API_URL = API_BASE + CANCHAS;

export async function getCanchas() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener canchas');
  const data = await res.json();
  console.log("data:", data);
  return data;
}

export async function getCanchaById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Error al obtener la cancha');
  return res.json();
}
