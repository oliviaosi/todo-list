import { useState } from "react";
import TodoItem from "./components/TodoItem";


function App() {
  //STATE
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn react again",
  ])
  
  return (
    <div>
      <h1>My to do list</h1>
      {todos.map((todo,index) => (
      <TodoItem todo={todo} key={index}/>
      ))}
      
    </div>
  );
}

export default App;
