function TarjetaProducto({ nombre, descripcion, precio, imagen }) {
  return (
    <article className="tarjeta">
      <div className="espacio-imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </article>
  )
}

export default TarjetaProducto