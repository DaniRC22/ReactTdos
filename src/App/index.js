import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
//    const defaultTodos= [
//      {text:'cortar cebolla', completed: true},
//      {text:'Tomar el Curso de Intro a React.js', completed: false},
//      {text:'Racing', completed: true},
//      {text:'asdasdasd', completed: false},
//      {text:'sdasd', completed: false}

//    ];

//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('Log 1');
  // React.useEffect(()=> {
  //   console.log('Log 2');
  // })
  // React.useEffect(()=> {
  //   console.log('Looooog 2');
  // },[]);
  React.useEffect(()=> {
    console.log('Log 2');
  },[totalTodos]);
  console.log('Log 3');

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
      (todo) => todo.text == text
    );
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos);
  };

  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    seachedTodos={seachedTodos}
    deleteTodo={deleteTodo}
    setSearchValue={setSearchValue}
    completeTodo={completeTodo}
    />
  );
}

 




export default App;
