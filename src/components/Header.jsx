import logoJugueteria from '../assets/img/LogoJugueteria.png'

function Header({ items = [] }) {
  const menuItems = items.length
    ? items
    : [
        { id: 1, nombre: 'Inicio', enlace: '#inicio' },
        { id: 2, nombre: 'Catálogo', enlace: '#catalogo' },
        { id: 3, nombre: 'Comprar', enlace: '#comprar' },
        { id: 4, nombre: 'Contacto', enlace: '#contacto' }
      ]

  return (
    <header>
      <img src={logoJugueteria} 
      alt="Logo de la Juguetería"
      width="200"
      />
      
      <h1>Juguetería Mundo Feliz</h1>
      <p>Los mejores juguetes para todas las edades</p>

      <nav id="menu-principal">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.enlace}>{item.nombre}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header