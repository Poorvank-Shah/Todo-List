import './App.css';
import Header from './myComponents/Header';
import { Todos } from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import { AddTodo } from './myComponents/AddTodo';
import { About } from './myComponents/About';

import React, { useState, useEffect } from 'react';

import {Route,Routes,BrowserRouter} from "react-router-dom";



function App() {
    //  initializing todo list
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    // this are called as methods

    const onDelete = (todo) => {
        console.log("I'm on delete todo", todo)
        // deleting this way in react wont work . U have tu use USE STATE
        // let index = todos.indexOf(todo)
        // todo.splice(index,1)
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }

    const addTodo = (title, desc) => {
        console.log(`Adding Todo : ${title} , ${desc}`);
        let sno;
        if (todos.length === 0) { sno = 0; }
        else { sno = todos[todos.length - 1].sno + 1; }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        console.log(myTodo);
        setTodos([...todos, myTodo])
    }


    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <>
            <BrowserRouter>
            <Header title="My Todos" searchBar={false} />
            <Routes>
                <Route path="/"  element={<div><AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /></div>} /> 
                {/* <Route path="/"  element={[<AddTodo addTodo={addTodo} /> , <Todos todos={todos} onDelete={onDelete} /> ]} /> */}
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;

// import Alert from 'react-bootstrap/Alert';
// {[
//   'primary',
//   'secondary',
//   'success',
//   'danger',
//   'warning',
//   'info',
//   'light',
//   'dark',
// ].map((variant) => (
//   <Alert key={variant} variant={variant}>
//     This is a {variant} alert—check it out!
//   </Alert>
// ))}