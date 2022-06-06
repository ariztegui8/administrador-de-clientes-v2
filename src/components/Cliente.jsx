import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente}) => {

    const navigate = useNavigate();

    const {nombre, empresa, email, telefono, notas, id} = cliente

  return (
    <>
        <tr className='text-center'>
            <th scope="row">{id}</th>
            <td>{nombre}</td>
            <td>
                <p>Email: {email}</p>
                <p>Tel: {telefono}</p>
            </td>
            <td>{empresa}</td>
            <td className='flex-column d-flex'>
                <button
                    type='button'
                    className='btn btn-success m-1'
                    onClick={()=> navigate(`/clientes/${id}`)}
                >Ver
                </button>
                <button
                    type='button'
                    className='btn btn-warning m-1'
                >Editar
                </button>
                <button
                    type='button'
                    className='btn btn-danger m-1'
                >Eliminar
                </button>
            </td>
        </tr>
    </>
  )
}

export default Cliente