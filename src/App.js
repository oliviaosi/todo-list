import { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

//css
import "./App.css";

function App() {
  //STATE
  const [todos, setTodos] = useState([
    {text: "lEARN ABOUT React", isCompleted: false},
    {text: "Meet friends for lunch", isCompleted: false},
    {text: "Build cool React app", isCompleted: false},
  ]);
  //Actions

const addTodo = (text)=> {
  const newTodos= [...todos, {text: text, isCompleted:false}];
    // What it would it would like if you did not add the three dots before todos
    // [["something", "something else"], "some todo"]
    // With the three dots also called the spread operator 
    // ["something", "something else", "some todo"]
  setTodos(newTodos);
}

const completeTodo =(index) =>{
  const newTodos =[...todos]
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}

const removeTodo =  (index)=>{
  const newTodos= [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
}
  return (
      <div className="app">
      <div className="todo-list">
      <h1>My to do list</h1>

      {todos.map((todo,index) => (
        <TodoItem todo={todo} key={index} indext={index}
      completTodo={completeTodo}
      removeTodo={removeTodo} />
      ))}
        <TodoForm addTodo={addTodo}/>
      
    </div>
    </div>
  );
}

export default App;
