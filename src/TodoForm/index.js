import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm(){
const {
    addTodo,
    setopenModal,
} = React.useContext(TodoContext);

const[newTodoValue, setNewTodoValue] = React.useState('')

const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setopenModal(false);
};
const onCancel = () => {
    setopenModal(false);
};

const onChange = (event) => {
    setNewTodoValue(event.target.value);
};
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="lalalf"
            value={newTodoValue}
            onChange={onChange}
            required
            />
            <div className="TodoForm-buttonContainer">
            <button type="" className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}> 
            Cancelar</button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">
            Añadir TODO
            </button>
            </div>
        </form>
    )
};

export {TodoForm}