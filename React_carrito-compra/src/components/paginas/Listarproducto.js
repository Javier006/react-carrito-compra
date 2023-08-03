import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
const Listarproducto = () => {
  let producto=JSON.parse(localStorage.getItem("productos"));


  function obtener(cod){
      localStorage.setItem("ID",JSON.stringify(cod));
  }

  return (
  <div>
      <div  className="container">
          <div className="row">
              <div className="col-12">
                  <h1 className="titulo">Productos</h1>
                  <br/>
                  <hr/>
              </div>                  
                      {producto.map(pro =>{
                          return(
                              <div className="col-md-4 col-6 product-block" key={pro.id}>
                                      <div className="fotos">
                                          <img className="img-fluid img-portfolio img-hover mb-4" src={pro.foto}/>
                                      </div>
                                  <div className="caption"> 
                                      <h3>{pro.nombre}</h3>
                                      <Link to='/DetalleProducto'>
                                          <button type="button" className="btn btn-primary" onClick={() => obtener(pro.id)}>Seleccionar</button>
                                      </Link>
                                      <div className="mb-3">
                                          Precio $ {pro.precio}
                                          <hr></hr>
                                      </div>
                                  </div>
                              </div>
                      )})}
          </div>
      </div> 
  </div>
  );
}

export default Listarproducto
