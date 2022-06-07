import React from 'react'
import Formulario from '../components/Formulario'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const EditarCliente = () => {

  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true)

  const {nombre, email, telefono, empresa, notas} = cliente;

  useEffect(()=>{
    const consultarApi = async ()=>{
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
      setCliente(resultado);

      } catch (error) {
        console.log(error);
      }
      
      setTimeout(()=>{
        setCargando(!cargando)
      },1500)
    }
    consultarApi();
  }, [])

    const {id} = useParams()

  return (
    <div>
      <h2 className='fw-bold title-nuevo-cliente'>Editar Cliente</h2>
      <p>Utiliza este formulario para editar un cliente</p>

      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
      />
      ) : <p className='fs-4'>Cliente ID no válido</p>}
    </div>
  )
}

export default EditarCliente