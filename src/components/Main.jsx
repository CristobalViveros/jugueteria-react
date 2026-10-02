import GaleriaProducto from './GaleriaProducto'
import Formulario from './Formulario'

function Main({ productos }) {
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

        <GaleriaProducto productos={productos} />
      </section>

      <section id="comprar" className="seccion">
        <h2>Comprar</h2>
        <p>Completa el formulario para hacer tu pedido:</p>
        <Formulario />
      </section>
    </main>
  )
}

export default Main