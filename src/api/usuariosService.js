// Servicio para usuarios
export async function getUsuarios() {
  const res = await fetch('/api/usuarios');
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

export async function getUsuarioById(id) {
  const res = await fetch(`/api/usuarios/${id}`);
  if (!res.ok) throw new Error('Error al obtener el usuario');
  return res.json();
}
