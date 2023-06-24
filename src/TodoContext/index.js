import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider ({children}){
 
    const {item : todos, saveItem : saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setopenModal] = React.useState(false);
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
  
   
    const seachedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLocaleLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
      return  todoText.includes(searchText);
      }
    );
  
      const addTodo = (text) => {
        const newTodos = [...todos];
       newTodos.push({
        text,
        completed: false,
       }) 
        saveTodos(newTodos)
      };

    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
     newTodos[todoIndex].completed = true;
     saveTodos(newTodos)
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
        <TodoContext.Provider value={{
          completedTodos,
          totalTodos,
          searchValue,
          seachedTodos,
          deleteTodo,
          setSearchValue,
          completeTodo,
          loading,
          error,
          openModal,
          setopenModal,
          addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider}