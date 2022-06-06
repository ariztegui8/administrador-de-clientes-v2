import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import Alerta from './Alerta';

const Formulario = () => {

     const nuevoClienteSchema = Yup.object().shape({
          nombre: Yup.string()
               .min(3, 'El nombre es muy corto')
               .max(25, 'El nombre es demasiado largo')
               .required('El nombre del Cliente es obligatorio'),
          empresa: Yup.string()
               .required('El nombre de la Empresa es obligatorio')   ,
          email: Yup.string()
               .email('E-mail no válido')
               .required('El E-mail es obligatorio'),    
          telefono: Yup.number()
               .typeError('El numero no es válido')
               .integer('El numero no es válido')
               .positive('El numero no es válido'),
     })

     const handleSubmit = (valores) =>{
          console.log(valores);
     }

  return (
    <div className='bg-white p-4 mt-4 w-75 m-auto fw-bold rounded-2'>
        <h4 className='text-uppercase text-secondary text-center'>Agregar Cliente</h4>

        <Formik
          initialValues={{
               nombre: '',
               empresa: '',
               email: '',
               telefono: '',
               notas: ''
          }}
          onSubmit={(values)=>{
               handleSubmit(values);
          }}
          validationSchema={nuevoClienteSchema}
        >

          { ({errors, touched})=>(

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
                        name='nombre'
                   />
                    {errors.nombre && touched.nombre ? (
                         <Alerta>{errors.nombre}</Alerta>
                    ) : null}
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
                        name='empresa'
                   />
                   {errors.empresa && touched.nombre ? (
                         <Alerta>{errors.empresa}</Alerta>
                    ) : null}
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
                        name='email'
                   />
                   {errors.email && touched.nombre ? (
                         <Alerta>{errors.email}</Alerta>
                    ) : null}
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
                        name='telefono'
                   />
                   {errors.telefono && touched.nombre ? (
                         <Alerta>{errors.telefono}</Alerta>
                    ) : null}
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
                        name='notas'
                   />
                </div>

                <input
                    type="submit"
                    value='Agregar Cliente'
                    className='p-2 mt-2 w-100 fw-bold text-white input-submit-form'
                />
            </Form>

          )}
        </Formik>
    </div>
  )
}

export default Formulario