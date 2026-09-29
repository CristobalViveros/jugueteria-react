import TarjetaProducto from './TarjetaProducto'

function GaleriaProducto({ productos }) {
  return (
    <div className="galeria">
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
        />
      ))}
    </div>
  )
}

export default GaleriaProducto