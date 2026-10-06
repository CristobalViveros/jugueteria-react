import Main from '../components/Main'

import pelotaFutbol from '../assets/img/pelota-futbol.jpg'
import muñecaBarbie from '../assets/img/muñeca-barbie.jpg'
import RompeCabezas3D from '../assets/img/RompeCabezas3D.jpg'
import LegoSet from '../assets/img/LegoSet.jpg'
import autoControlRemoto from '../assets/img/autoControlRemoto.jpg'

export const productos = [
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

function Productos() {
  return <Main productos={productos} />
}

export default Productos
