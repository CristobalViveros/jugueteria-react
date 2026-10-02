import React, { useState } from 'react'

function TarjetaProducto({ nombre, descripcion, precio, imagen }) {
  const [meGusta, setMeGusta] = useState(false)

  const alternar = () => {
    setMeGusta((prev) => !prev)
  }

  return (
    <article className="tarjeta">
      <div className="espacio-imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p className="precio-producto">Precio: ${precio}</p>

      <button
        onClick={alternar}
        style={{
          backgroundColor: meGusta ? 'yellow' : 'lightgray',
          color: meGusta ? 'white' : 'black',
          fontWeight: 'bold',
          border: '4px'
        }}
      >
        {meGusta ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>

      <button onClick={() => alert(`¡Gracias por comprar ${nombre}!`)}>Comprar</button>
    </article>
  )
}

export default TarjetaProducto