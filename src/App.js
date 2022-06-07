import './App.css';
import React, { useState } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AddTodo from './components/AddTodo'
import Todo from './components/Todo';
import Funcs from './components/Funcs';


function App() {
  const [todoVar, setTodoVar] = useState([]);
  const [checked, updateChecked] = useState([]);
  const [filter, setFilter] = useState('All');

  // const renderTodos = (todoVar) => {
  //   console.log(`renderTodos invoked with todoVar: ${todoVar}`);
  //   // console.log(document.querySelectorAll('div.todo'));
  //   // {
  //   //   return todoVar.map((todo, idx) => {
  //   //     <Todo
  //   //       data={todo}
  //   //       key={idx}
  //   //       todoVar={todoVar}
  //   //       setTodoVar={setTodoVar} />
  //   //   })
  //   // }
  // }

  return (
    <div className="App p-3">
      <h1 className="heading">todos</h1>

      <div className='myApp w-50'>
        {/* ADD TODO COMPONENT */}
        <AddTodo
          setTodoVar={setTodoVar}
          updateChecked={updateChecked} />

        {/* TODO COMPONENT */}
        {todoVar.map((todo, idx) => <Todo data={todo}
          todoVar={todoVar}
          setTodoVar={setTodoVar}
          checked={checked}
          updateChecked={updateChecked}
          filter={filter}
          key={idx} />)}

        {/* {renderTodos(todoVar)} */}

        {/* FUNCS COMPONENT */}

        {todoVar.length > 0 ? <Funcs
          todoVar={todoVar}
          setTodoVar={setTodoVar}
          checked={checked}
          updateChecked={updateChecked}
          setFilter={setFilter} /> : null}
      </div>

      <p className='small'>
        Created by Manav <br />
        <small> Part of React UI Assignment</small>
      </p>
    </div>
  );
}

export default App;
