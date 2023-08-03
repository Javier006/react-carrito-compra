import React from 'react'
import '../../App.css'
const Inicio = () => {
  return (
    <div>
      <h1 className="titulo">Merchandising de SCARLXRD</h1>
      <hr/><br/>
  <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/gorrocar001.jpg" className="d-block"/>
    </div>
    <div className="carousel-item">
      <img src="/polera006.jpg" className="d-block"/>
    </div>
    <div className="carousel-item">
      <img src="polerongris002.jpg" className="d-block"/>
    </div>
  </div>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon btn-dark" aria-hidden="false"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon btn-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

</div>
      
    </div>
  )
}

export default Inicio
