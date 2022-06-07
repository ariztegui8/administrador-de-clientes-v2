import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const VerCliente = () => {

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
    cargando ? <Spinner />
      : 
        Object.keys(cliente).length === 0 ? <p className='fs-4'>No hay Resultados</p> : (
      <div className='bg-white w-75 m-auto text-left p-3 rounded-2'>
        <h2 className='fw-bold title-nuevo-cliente'>Cliente - <span className='text-uppercase'>{nombre}</span></h2>
        <div>
          {cliente.nombre && (
            <p className='text-uppercase fw-semibold fs-5 mt-5'>email: <span className='text-lowercase fw-normal'>{email}</span></p>
          )}
          {cliente.telefono && (
            <p className='text-uppercase fw-semibold fs-5 mt-2'>telefono: <span className='text-lowercase fw-normal'>{telefono}</span></p>
          )}
          {cliente.empresa && (
            <p className='text-uppercase fw-semibold fs-5 mt-2'>empresa: <span className='text-lowercase fw-normal'>{empresa}</span></p>
          )}
          {cliente.notas && (
            <p className='text-uppercase fw-semibold fs-5 mt-2'>notas: <span className='text-lowercase fw-normal'>{notas}</span></p>
          )}
        </div>
    </div>
    )

    
  )
}

export default VerCliente