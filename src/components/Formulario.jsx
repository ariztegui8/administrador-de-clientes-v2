import { Field, Form, Formik } from 'formik'
import React from 'react'

const Formulario = () => {
  return (
    <div className='bg-white p-4 mt-4 w-75 m-auto fw-bold rounded-2'>
        <h4 className='text-uppercase text-secondary text-center'>Agregar Cliente</h4>

        <Formik>
            <Form 
                className='mt-4'
            >
                <div className='mb-3'>
                   <label
                        className='mb-1 text-secondary'
                        htmlFor='nombre'
                   >Nombre:</label>
                   <Field
                        id="nombre"
                        type="text"
                        className='w-100 input-formulario p-2'
                        placeholder='Nombre del Cliente'
                   />
                </div>

                <div className='mb-3'>
                   <label
                        className='mb-1 text-secondary'
                        htmlFor='empresa'
                   >Empresa:</label>
                   <Field
                        id="empresa"
                        type="text"
                        className='w-100 input-formulario p-2'
                        placeholder='Empresa del Cliente'
                   />
                </div>

                <div className='mb-3'>
                   <label
                        className='mb-1 text-secondary'
                        htmlFor='email'
                   >E-mail:</label>
                   <Field
                        id="email"
                        type="email"
                        className='w-100 input-formulario p-2'
                        placeholder='Email del Cliente'
                   />
                </div>

                <div className='mb-3'>
                   <label
                        className='mb-1 text-secondary'
                        htmlFor='telefono'
                   >Teléfono:</label>
                   <Field
                        id="telefono"
                        type="tel"
                        className='w-100 input-formulario p-2'
                        placeholder='Teléfono del Cliente'
                   />
                </div>

                <div className='mb-3'>
                   <label
                        className='mb-1 text-secondary'
                        htmlFor='notas'
                   >Notas:</label>
                   <Field
                        as="textarea"
                        id="notas"
                        type="text"
                        className='w-100 input-formulario p-2'
                        placeholder='Notas del Cliente'
                   />
                </div>

                <input
                    type="submit"
                    value='Agregar Cliente'
                    className='p-2 mt-2 w-100 fw-bold text-white input-submit-form'
                />
            </Form>
        </Formik>
    </div>
  )
}

export default Formulario