import React from 'react';
import {Link} from 'react-router-dom';

const DetalleProducto = () => {

    let producto = JSON.parse(localStorage.getItem("productos"));
    let ID = JSON.parse(localStorage.getItem("ID"));

    function calcular(cod){
        var a = document.getElementById("idCalcular").value;
        var total = a * cod;
        document.getElementById("idTotal").value = total;
    }

    function agregar(g){

        {producto.map(pro =>{
            
            if(pro.id == g){
                const cantidades = parseInt(document.getElementById("idCalcular").value);
                const monto = document.getElementById("idTotal").value;
                const a = {
                    id: pro.id,
                    nombre: pro.nombre,
                    foto: pro.foto,
                    stock: cantidades,
                    precio: pro.precio,
                    descripcion: pro.descripcion,
                    total: monto
                }

                var guardar = [];

                guardar = JSON.parse(localStorage.getItem("carrito"));
                guardar.push(a);
                localStorage.setItem("carrito", JSON.stringify(guardar));
                alert("producto agregado");

            }
        })}

    }

    return(
        <div>
            <h1 className="titulo">Detalle Producto</h1>
                <div className="row">
                    {producto.map(pro => {      
                        if(pro.id == ID){
                            return (
                                <div key={pro.id}>
                                    <img className="FotoD" src= {pro.foto} />
                                        <div className="TextD" >Precio  $ {pro.precio} </div>
                                        <div>
                                            <p className="titulo"> Descripción </p>
                                            <p className="TextD">{pro.descripcion}</p>
                                        </div>
                                        <div className="TextD">
                                            <p> Cantidad → 
                                                <input type="number"  id="idCalcular" min="1" max="100" onChange={() => calcular(pro.precio)} /><br/> 
                                            </p>
                                            <p> Total →  
                                                <input type="text" id="idTotal"  /><br/> 
                                                <input className="btn btn-primary" type="button" value="Agregar a Carrito" onClick={() => agregar(pro.id)}/>
                                            </p>    
                                        </div>
                                </div>
                            );
                        }})}
                        <Link className="TextD" to="/productos">
                            <input type="button" className="btn btn-primary" value="Volver"/>
                        </Link>
            </div>
        </div>  
      );
}

export default DetalleProducto;
