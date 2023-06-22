import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';
function TodoCounter(){
 const{completedTodos,totalTodos} = React.useContext(TodoContext)

  return (
    completedTodos === totalTodos 
        ? <h1 className='TodoCounter'>Has completado todos tus TODOS 🥳</h1> 
        :<h1 className='TodoCounter'>Has completado <span> {completedTodos} </span>de <span>{totalTodos}</span> TODOS</h1>
);
}

  export { TodoCounter };