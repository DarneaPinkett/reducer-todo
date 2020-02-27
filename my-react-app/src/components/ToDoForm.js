import React, {useState, useReducer} from 'react';
import { listReducer, initialState } from '../reducers';
import Todo from "./ToDo";

const ToDoForm = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
    }
    const handleClear = e => {
        e.preventDefault();
    }
    console.log("this is state", state);

    return (
        <div>
            <form>
                <label htmlFor="todo">Add Todo:</label>
                <input id="todo" name="todo" type="text" value={todo} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Add</button>
                <button onClick={handleClear}>Delete</button>            
            </form>
            <Todo id={state.id} todo={todo} dispatch={dispatch} state={state} />
        </div>

    );
}

export default ToDoForm;