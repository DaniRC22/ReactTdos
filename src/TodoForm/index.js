import React from "react";

function TodoForm(){
    return (
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="lalalf"/>
            <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button">
            añadir TODO
            </button>
            <button className="TodoForm-cancel"> 
            Cancelar</button>
            </div>
        </form>
    )
};

export {TodoForm}