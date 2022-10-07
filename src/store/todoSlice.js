import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if(!response.ok){
                throw new Error('что то не так');
            }
            const data = await response.json();
            return data;
        } catch (error){
            return rejectWithValue(error.message);
        }
        
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        text: '',
        statuss: null,
        error: null
    },
    reducers: {
        addTodo(state, action){
            console.log(state);
            console.log(action);
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action){
           state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo(state, action){
            const toggletTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggletTodo.completed = !toggletTodo.completed;
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) =>{
            state.statuss = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) =>{
            state.statuss = 'resolve';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) =>{
            state.statuss = 'error';
            state.error = action.payload;
        } 
    }
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;
