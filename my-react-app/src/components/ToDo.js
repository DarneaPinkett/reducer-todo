import React from "react";

const Todo = (props) => {
    const onToggle = (id) => {
        props.dispatch({ type: "COMPLETED", id: id})
    }
    return (
        <div>
            {props.state.map(Todo => {
                return (
                    <div className={`Todo${Todo.completed ? "completed" : ""}`} onClick={() => onToggle(Todo.id)} key={Todo.id}>
                        <p>{Todo.item}</p>
                        </div>
                )
})}
        </div>
    );
    
}

export default Todo;