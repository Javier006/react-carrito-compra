import React from 'react';
import { useState } from "react";
import '../../App.css'


const Carrito = () => {
 
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")))
  const [producto, setProducto] = useState(JSON.parse(localStorage.getItem("productos")))
  
  function Comprar(){

    carrito.map(m =>{
      producto.map(l =>{
        if(l.id == m.id){
          var stockP = l.stock
          var stockC = m.stock
          var total =  stockP - stockC
          //cambiar stock en LS
          l.stock = total
          localStorage.setItem("productos", JSON.stringify(producto))
          //Vaciar
          let VaciarCarrito = []
          localStorage.setItem("carrito", JSON.stringify(VaciarCarrito))
          //Mensaje de extio
          alert("Compra realizado con exito.")
          //Actualizar carrito
          setCarrito(VaciarCarrito)
        }
      })
    })
  }


  
  function Sumar(){

    var acumCantidad = 0

    carrito.map(su =>{
      
    acumCantidad = acumCantidad + ( su.precio * su.stock)

    return(
    document.getElementById("idSumar").value = acumCantidad
    )
   })

  }
  
  function borrar(cod) {
    const eliminar = carrito.filter((carr)=>carr.id !== cod)
    localStorage.setItem("carrito", JSON.stringify(eliminar))
    setCarrito(eliminar)
  
  }

  function Anular(){
    let  anular = []
    localStorage.setItem("carrito", JSON.stringify(anular))
    setCarrito(anular)
    
  }

  if(carrito.length == " "){
    return(

      <div>
        <br/>
        <h1 className="titulo">Carrito
          <img className="carrito"src="/carrito.png"/>
        </h1>
        <hr/>
        <div className="titulo"> Carrito Vacio </div>
      </div>  
    )
    }else{

  return(
    carritoDatos()
  );

}


function carritoDatos(){

  return(
    <div>
    <h1 className="titulo">Carrito
      <img className="carrito"src="/carrito.png"/>
    </h1>  
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-10 mb-4">
          <div className="">
            <table className="table text-center" border="1">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th></th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                  {carrito.map(carr => {
                    return (
                      <tr key={carr.id}>
                        <td>{carr.nombre} </td>
                        <td><img className="carrito" src={carr.foto} /></td>
                        <td>{carr.descripcion}</td>
                        <td>{carr.precio}</td>
                        <td>{carr.stock}</td>
                        <td> 
                          <button className="btn btn-primary" onClick={() => borrar(carr.id)}>Borrar</button>
                        </td>
                      </tr>
                    );
                  })}
                  
                  <tr>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td> <input type="text"  className="outlinenone" id="idSumar" onClick={() => Sumar()}/> </td>
                  <td> 
                    <input className="btn btn-primary" type="button" value="Comprar" onClick={() => Comprar()}></input> 
                  </td>
                  <td> 
                    <button className="btn btn-primary " type="button" onClick={() => Anular()}>Anular</button>
                  </td>
                  </tr>
                </tbody>
              </table>
            </div>    
          </div>
        </div>   
      </div>
  </div>  
  );
};

};

export default Carrito;
