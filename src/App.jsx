import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Productos from './views/Productos'
import Producto from './views/Producto'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/producto/:id' element={<Producto />} />
    </Routes>    
  )
}

export default App
