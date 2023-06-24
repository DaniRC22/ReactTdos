import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton(){
    const {setopenModal} = React.useContext(TodoContext)
    
    return(
        <button className="CreateTodoButton"
        onClick={() =>{
        setopenModal(state =>!state)
    }}> Create </button> 
    )
}

export {CreateTodoButton}