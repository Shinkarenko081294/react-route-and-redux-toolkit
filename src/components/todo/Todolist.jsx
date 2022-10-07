import { useState } from "react";
import React from "react";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {addTodo} from '../../store/todoSlice';

import { TodoItem } from "./TodoItem";
import { InputFeild } from "./InputFeild";

// css
import stList from './Todolist.module.css';

const TodoList = (props) =>{
    const todos = useSelector(state => state.todoSlice.todos);
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    };
    const [text, setText] = useState('');

    return(
        <div className={stList.wrapper_todo}>
            <InputFeild text={text} handleInput={setText} handleSubmit={addTask}/>

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