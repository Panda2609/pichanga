// Servicio para tipos de cancha
const API_URL = "https://backend-466084083507.southamerica-west1.run.app/api/tiposcancha";

export async function getTiposCancha() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener tipos de cancha');
  return res.json();
}

export async function getTipoCanchaById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Error al obtener el tipo de cancha');
  return res.json();
}
