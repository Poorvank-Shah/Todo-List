import React from 'react'
import { TodoItem } from "./TodoItem";
export const Todos = (props) => {
    const todoStyle = {
        minHeight : "38vh",
        margin : "38px auto"
    }
    return (
        <div className='container' style={todoStyle}>
            <h3 className='my-3'>Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    return (
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })}
        </div>
    )
}
