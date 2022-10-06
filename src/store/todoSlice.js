import {createSlice} from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        text: ''
    },
    reducers: {
        addTodo(state, action){
            console.log(state);
            console.log(action);
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                complited: false
            })
        },
        removeTodo(state, action){
           state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo(state, action){
            const toggletTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggletTodo.complited = !toggletTodo.complited;
        }
    },
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;
