import React from 'react'
import { useParams } from 'react-router-dom'
import { productos } from './Productos'

function Producto() {
  const { id } = useParams()
  const producto = productos.find((item) => item.id === Number(id))

  if (!producto) {
    return <h2>Producto no encontrado</h2>
  }

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', textAlign: 'center' }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: '300px', borderRadius: '12px', marginBottom: '20px' }}
      />
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <h3>Precio: ${producto.precio}</h3>
    </div>
  )
}

export default Producto