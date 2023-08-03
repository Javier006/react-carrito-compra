import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/paginas/Inicio';
import Listarproducto from './components/paginas/Listarproducto';
import Carrito from './components/paginas/Carrito';
import Quienes from './components/paginas/Quienesomos';
import Detalle from './components/paginas/DetalleProducto';
import CerrarSesion from './components/paginas/CerrarSesion';
function App() {
  return (
    <div className="App">
       
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Inicio/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/productos' element={<Listarproducto/>}/>
          <Route path='/quienesomos' element={<Quienes/>}/>
          <Route path='/DetalleProducto' element={<Detalle/>}/>
          <Route path='/cerrarSesion' element={<CerrarSesion/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
