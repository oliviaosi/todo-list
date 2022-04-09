import React, {useState} from "react";


function TodoForm(props){
    const{ addTodo} = props;
    //state
    const[value,setValue] = useState("");

    // Actions
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }
    // if the value is false, = the string is false, if they didnt put anything in, 
    return (
    <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder= "Add to do ..." 
        onChange={(event)=>setValue(event.target.value)}/>
    </form>
    );
}

export default TodoForm;