import React from 'react';
import { useState, useEffect } from 'react';
import Cargar from './Cargar'
import './clima.css'
function Clima(){
    
const [datos, setDatos] = useState();
const [loading, setLoading] = useState(false);

useEffect(() =>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=santiago&appid=eaed9e10df601aab920b0f2f1e13df89')
    .then((response) => {
        return response.json()
    })
    .then((datos) => {
        setDatos(datos)
        //console.log(datos)
        setLoading(true);
    }, 9000);
},[])

 function mostrarTiempo(){
    const kelvin = 273.15;
    const {name,main,wind} = datos;
    let viento = wind.speed;
    let temperatura_actual = parseFloat(main.temp - kelvin,10).toFixed(0);
    let humedad = main.humidity;


    return(
      <div className="Tiempo">
        <div className="container">
          <div className="top" >
            <div className="Color">
              <p className="Tletras">{name} </p>
            </div>
            <div  className="Color">
              <h1 className="Ttitulo">{temperatura_actual} °C </h1>
            </div>
            <div className="Color">
              <p>Humedad {humedad}%</p>
            </div>
            <div className="Color">
              <p>Viento {viento} km/h </p>
            </div>
          </div>
        </div>
        <br/>
      </div>
    )
}


if(loading){
  return mostrarTiempo();
}else{
  return (
   <Cargar/>
  );
}

};

export default Clima;
