import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

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
  const localStorageTodos = localStorage.getItem
  ('TODOS_V1')

  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else{
    parsedTodos = JSON.parse(localStorageTodos);

  }
  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  };

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
  }
  

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos}      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {seachedTodos.map(todo=>(
          <TodoItem key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}





export default App;
