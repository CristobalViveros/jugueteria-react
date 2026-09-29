import pelotaFutbol from '../assets/img/pelota-futbol.jpg'
import muñecaBarbie from '../assets/img/muñeca-barbie.jpg'
import RompeCabezas3D from '../assets/img/RompeCabezas3D.jpg'
import LegoSet from '../assets/img/LegoSet.jpg'
import autoControlRemoto from '../assets/img/autoControlRemoto.jpg'

const productos = [
  {
    id: 1,
    nombre: 'Pelota de fútbol',
    descripcion: 'Pelota de fútbol de alta calidad para jugar en cualquier superficie.',
    precio: '14.990',
    imagen: pelotaFutbol
  },
  {
    id: 2,
    nombre: 'Muñeca Barbie',
    descripcion: 'Muñeca Barbie con accesorios y ropa de moda.',
    precio: '19.990',
    imagen: muñecaBarbie
  },
  {
    id: 3,
    nombre: 'Rompecabezas 3D',
    descripcion: 'Rompecabezas 3D de madera para construir modelos detallados.',
    precio: '24.990',
    imagen: RompeCabezas3D
  },
  {
    id: 4,
    nombre: 'Set de construcción LEGO',
    descripcion: 'Set de construcción LEGO para estimular la creatividad y la imaginación.',
    precio: '29.990',
    imagen: LegoSet
  },
  {
    id: 5,
    nombre: 'Auto de control remoto',
    descripcion: 'Auto de control remoto con luces y sonidos para una experiencia emocionante.',
    precio: '34.990',
    imagen: autoControlRemoto
  }
]

function Main() {
  return (
    <main id="contenido">
      <section id="inicio" className="seccion-hero">
        <h2>Bienvenidos</h2>
        <p>Juguetería Mundo Feliz</p>
        <p>Diversión garantizada para grandes y chicos</p>
      </section>

      <section id="catalogo" className="seccion seccion-catalogo">
        <h2>Catálogo</h2>
        <p>
          Aquí va una cuadrícula de tarjetas con espacio para imágenes. Haz clic
          en una tarjeta para marcarla como favorita.
        </p>
        <p id="contador-favoritos">Favoritos: 0</p>

        <div className="galeria">
          {productos.map((producto) => (
            <article className="tarjeta" key={producto.id}>
              <div className="espacio-imagen">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="comprar" className="seccion">
        <h2>Comprar</h2>
        <p>Completa el formulario para hacer tu pedido:</p>
      </section>
    </main>
  )
}

export default Main