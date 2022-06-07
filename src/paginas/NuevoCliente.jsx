import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {

  return (
    <div>
      <h2 className='fw-bold title-nuevo-cliente'>Nuevo Cliente</h2>
      <p>Llena los siguientes campos para registrar un cliente</p>
      <Formulario/>
    </div>
  )
}

export default NuevoCliente