// Servicio para canchas
export async function getCanchas() {
  const res = await fetch('/api/canchas');
  if (!res.ok) throw new Error('Error al obtener canchas');
  return res.json();
}

export async function getCanchaById(id) {
  const res = await fetch(`/api/canchas/${id}`);
  if (!res.ok) throw new Error('Error al obtener la cancha');
  return res.json();
}
