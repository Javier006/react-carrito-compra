import React from 'react'

const Quienesomos = () => {
  return (
    <div>
        <h1>Integrantes</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Javier</td>
              <td>Gálvez</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
export default Quienesomos;
