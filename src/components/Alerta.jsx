import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='alert alert-danger p-2 mt-2 fw-normal text-center'>
        {children}
    </div>
  )
}

export default Alerta