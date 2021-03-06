import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

const Layout = () => {


  return (
    <div className='row m-0 p-0'>
        <div className='col-3 colum-izq'>
            <h2 className='text-white text-center mt-4 mb-5 fw-bold'>ADM - Clientes</h2>
            <nav className='d-flex flex-column fs-5'>
                <NavLink className='text-white text-decoration-none mb-2' to='/clientes'
                >Clientes</NavLink>

                <NavLink className='text-white text-decoration-none' to='/clientes/nuevo'
                >Nuevo Cliente</NavLink>
            </nav>
        </div>

        <div className='col-9 colum-der p-4 '>
            <Outlet />
        </div>

        
    </div>
  )
}

export default Layout