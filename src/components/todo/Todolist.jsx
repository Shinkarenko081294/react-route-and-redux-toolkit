import { useState, useEffect } from "react";
import React from "react";
import {useSelector , useDispatch} from 'react-redux';

import {addTodo, fetchTodos} from '../../store/todoSlice';

import { TodoItem } from "./TodoItem";
import { InputFeild } from "./InputFeild";

// css
import stList from './Todolist.module.css';

const TodoList = (props) =>{
    const todos = useSelector(state => state.todoSlice.todos);
    const {statuss, error} = useSelector(state => state.todoSlice);

    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    };
    const [text, setText] = useState('');

    useEffect(() =>{
       dispatch(fetchTodos());
    }, [dispatch]);

    return(
        <div className={stList.wrapper_todo}>
            <InputFeild text={text} handleInput={setText} handleSubmit={addTask}/>

            {statuss === 'loading' && <h2>Loading....</h2>}
            {error && <h2>{error}</h2>}

            <ul className={stList.ulTodo}>
                {todos.map((todo) => (
                    <TodoItem 
                        key={todo.id}
                        {...todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export {TodoList};