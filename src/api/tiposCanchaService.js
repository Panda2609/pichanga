// Servicio para tipos de cancha
export async function getTiposCancha() {
  const res = await fetch('/api/tiposCancha');
  if (!res.ok) throw new Error('Error al obtener tipos de cancha');
  return res.json();
}

export async function getTipoCanchaById(id) {
  const res = await fetch(`/api/tiposCancha/${id}`);
  if (!res.ok) throw new Error('Error al obtener el tipo de cancha');
  return res.json();
}
