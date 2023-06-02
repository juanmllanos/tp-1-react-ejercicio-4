import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioTarea from './components/FormularioTarea'

function App() {

  return (
    <>
      <Container className='my-5'>
        <h1 className='display-3 text-center'>Lista de Tareas</h1>
        <hr />
        <FormularioTarea></FormularioTarea>
      </Container>
    </>
  )
}

export default App