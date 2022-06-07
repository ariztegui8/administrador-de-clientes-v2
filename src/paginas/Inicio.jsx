import React, { useEffect, useState } from 'react'
import Cliente from '../components/Cliente';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(()=>{
    const consultarApi = async ()=>{
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);

      } catch (error) {
        console.log(error);
      }
    }
    consultarApi();
  }, []);

  const handleDelete = async id =>{
    const confirmar = window.confirm('¿Deseas eliminar este Cliente?')
    
    if(confirmar){
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url, {
          method: 'DELETE'
        })
        await respuesta.json()

        const arrayClientes = clientes.filter(cliente => cliente.id !== id)
        setClientes(arrayClientes)
        
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <h2 className='fw-bold title-nuevo-cliente'>Clientes</h2>
      <p>Administra tus clientes</p>

      <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Contacto</th>
            <th scope="col">Empresa</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente =>(
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Inicio