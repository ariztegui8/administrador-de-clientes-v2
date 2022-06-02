import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const Layout = () => {


  return (
    <div className='row m-0 p-0'>
        <div className='col-3 colum-izq'>
            <h2 className='text-white text-center mt-4 mb-5 fw-bold'>CRM - Clientes</h2>
            <nav className='d-flex flex-column fs-5'>
                <Link className='text-white text-decoration-none mb-2' to='/clientes'>Clientes</Link>
                <Link className='text-white text-decoration-none' to='/clientes/nuevo'>Nuevo Cliente</Link>
            </nav>
        </div>

        <div className='col-9 colum-der'>
            <Outlet />
        </div>

        
    </div>
  )
}

export default Layout