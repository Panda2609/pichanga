// Servicio para regiones
export async function getRegiones() {
  const res = await fetch('/api/regiones');
  if (!res.ok) throw new Error('Error al obtener regiones');
  return res.json();
}

export async function getRegionById(id) {
  const res = await fetch(`/api/regiones/${id}`);
  if (!res.ok) throw new Error('Error al obtener la región');
  return res.json();
}
