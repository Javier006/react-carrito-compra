import React from 'react';
import {Link} from 'react-router-dom';
import Clima from '../tiempo/Clima'

const Navbar = () => {
  return (


<div>
    <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-2">
            <li className="nav-item">
            <Link className="text-white h7 text-decoration-none" to="/">Inicio</Link>
            </li>
        </div>
        <div className="bg-dark p-2">
            <li className="nav-item">
            <Link className="text-white h7 text-decoration-none" to="/quienesomos">Quienes Somos</Link>
            </li>
        </div>
        <div className="bg-dark p-2">
            <li className="nav-item">
            <Link className="text-white h7 text-decoration-none" to="/cerrarSesion">Cerrar Sesión</Link>
            </li>
        </div>
    </div>
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <li className="nav-item">
        </li>
        <li className="nav-item">
            <Link className="navbar-brand" to="/productos">Productos</Link>
        </li>
        <div className="bg-dark">
            <li className="nav-item">
            <Link className="navbar-brand" to="/carrito">Carrito <img src="/carrito.png" width="50px"/> </Link>
            </li>
        </div>
        <li className="nav-item dropdown">
            <a className="navbar-brand" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Clima
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li>
                    <a className="dropdown-item"><Clima/></a>
                </li>
            </ul>
        </li>
            <a className="navbar-brand">SCARLXRD</a>
        </div>
    </nav>
</div>
  
  );
}

export default Navbar
