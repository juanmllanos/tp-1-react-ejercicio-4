import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

function ListaTareas({ tareas, borrarTarea}) {

  return (
    <ListGroup >
      {tareas.map((terea, posicion) => <ItemTarea tarea = {terea} key = {posicion} borrarTarea = {borrarTarea}></ItemTarea>)}
    </ListGroup>

  );
}

export default ListaTareas;