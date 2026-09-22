import './App.css'

function App() {

  const productos=[
  {
    id: 1,
    nombre: 'Pelota de fútbol',
    descripcion: 'Pelota de fútbol de alta calidad para jugar en cualquier superficie.',
    precio: '14.990'
  },
  {
    id: 2,
    nombre: 'Muñeca Barbie',
    descripcion: 'Muñeca Barbie con accesorios y ropa de moda.',
    precio: '19.990'
  },
  {
    id: 3,
    nombre: 'Rompecabezas 3D',
    descripcion: 'Rompecabezas 3D de madera para construir modelos detallados.',
    precio: '24.990'
  },
  {
    id: 4,
    nombre: 'Set de construcción LEGO',
    descripcion: 'Set de construcción LEGO para estimular la creatividad y la imaginación.',
    precio: '29.990'
  },
  {
    id: 5,
    nombre: 'Auto de control remoto',
    descripcion: 'Auto de control remoto con luces y sonidos para una experiencia emocionante.',
    precio: '34.990'
  }

  ];

return(  
  <>
    <header>
			<h1>Juguetería Mundo Feliz</h1>
			<p>Los mejores juguetes para todas las edades</p>

			<nav id="menu-principal">
				<ul>
					<li><a href="#inicio">Inicio</a></li>
					<li><a href="#catalogo">Catálogo</a></li>
					<li><a href="#comprar">Comprar</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">Youtube</a></li>
					<li><a href="#contacto">Contacto</a></li>
				</ul>
			</nav>

    </header>

    <main id="contenido">
			<section id="inicio" className="seccion">
				<h2>Bienvenidos</h2>
				<p>Juguetería Mundo Feliz</p>
				<p>Diversión garantizada para grandes y chicos</p>
			</section>

			<section id="catalogo" className="seccion">
				<h2>Catálogo</h2>
				<p>Aquí va una cuadrícula de tarjetas con espacio para imágenes. Haz clic en una tarjeta para marcarla como favorita.</p>
				<p id="contador-favoritos">Favoritos: 0</p>

				<div className="galeria">
          {
            productos.map((producto) => (
              <article className="tarjeta">
              <div className="espacio-imagen" key={producto.id}>
                <img src=""/>
              </div>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
              
              </article>
            ))
          }
				</div>
			</section>

			<section id="comprar" className="seccion">
				<h2>Comprar</h2>
				<p>Completa el formulario para hacer tu pedido:</p>

				
			</section>

      <footer id="pie">
			    <p><small>&copy; <span id="anio-actual">2025</span> Juguetería Mundo Feliz - Todos los derechos reservados</small></p>
		  </footer>
		</main>
  </> 
) 
}

export default App
