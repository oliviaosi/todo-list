import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";


function App() {
  //STATE
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn react again",
  ])
  //Actions

const addTodo = (text)=> {
  const newTodos= [...todos, text];
    // What it would it would like if you did not add the three dots before todos
    // [["something", "something else"], "some todo"]
    // With the three dots also called the spread operator 
    // ["something", "something else", "some todo"]
  setTodos(newTodos);
}

  return (
    <div>
      <h1>My to do list</h1>
      {todos.map((todo,index) => (
      <TodoItem todo={todo} key={index}/>
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
