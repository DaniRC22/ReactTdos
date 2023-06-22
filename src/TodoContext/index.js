import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider ({children}){
 
    const {item : todos, saveItem : saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
  
   
    const seachedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLocaleLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
      return  todoText.includes(searchText);
      }
    );
  
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      if(!newTodos[todoIndex].completed){
      newTodos[todoIndex].completed = true;
    }else {
      newTodos[todoIndex].completed=false;
    };
    saveTodos(newTodos);
    }
    
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos);
    };
  

    return (
        <TodoContext.Provider value={
            {completedTodos,totalTodos,
            searchValue,seachedTodos,
            deleteTodo,setSearchValue,
            completeTodo,loading, error}
        }>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider}