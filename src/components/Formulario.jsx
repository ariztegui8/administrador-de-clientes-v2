import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Alerta from './Alerta';
import Spinner from './Spinner';

const Formulario = ({cliente, cargando}) => {

     const navigate = useNavigate();

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

     const handleSubmit = async (valores) =>{
          try {
              if(cliente.id){
                    const url = `http://localhost:4000/clientes/${cliente.id}`;
                    const respuesta = await fetch(url, {
                         method: 'PUT',
                         body: JSON.stringify(valores),
                         headers: {
                              'Content-Type': 'application/json'
                         }
                    });
                    const resultado = await respuesta.json()
                    console.log(resultado);
                    navigate('/clientes')
              } else{
                    const url = 'http://localhost:4000/clientes';
                    const respuesta = await fetch(url, {
                         method: 'POST',
                         body: JSON.stringify(valores),
                         headers: {
                              'Content-Type': 'application/json'
                         }
                    });
                    const resultado = await respuesta.json()
                    console.log(resultado);
                    navigate('/clientes')
              }
               
          } catch (error) {
               console.log(error);
          }
     }

  return (

     cargando ? <Spinner/> : (
    <div className='bg-white p-4 mt-4 w-75 m-auto fw-bold rounded-2'>
        <h4 className='text-uppercase text-secondary text-center'>{cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}</h4>

        <Formik
          initialValues={{
               nombre: cliente?.nombre ?? "",
               empresa: cliente?.empresa ?? "",
               email: cliente?.email ?? "",
               telefono: cliente?.telefono ?? "",
               notas: cliente?.notas ?? ""
          }}
          enableReinitialize={true}
          onSubmit={ async (values, {resetForm})=>{
              await handleSubmit(values);
               resetForm()
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
                    value={cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}
                    className='p-2 mt-2 w-100 fw-bold text-white input-submit-form'
                />
            </Form>

          )}
        </Formik>
    </div>
    )
  )
}

Formulario.defaultProps ={
     cliente: {},
     cargando: false
}

export default Formulario