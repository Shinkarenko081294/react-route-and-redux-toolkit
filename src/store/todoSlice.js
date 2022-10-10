import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// preloader
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
);

// удаление записи
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodos',
    async function(id, {rejectWithValue, dispatch}){
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })
            console.log(response);
            if(!response.ok){
                throw new Error('не могу удалить! ошибка на сервере!');
            }

            dispatch(removeTodo({id}));

        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
// изминение статуса
export const toggeleTodos = createAsyncThunk(
    'todos/toggeleTodos',
    async function(id, {rejectWithValue, dispatch, getState}){
        const todo = getState().todoSlice.todos.find(todo => todo.id === id);
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            })
            if(!response.ok){
                throw new Error('не могу сменить статус!');
            }

            dispatch(toggleTodo({id}));

            // проверка ответа сервера
            // const data = await response.json();
            // console.log(data);
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)
// добавление новой записи
export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async function(text, {rejectWithValue,dispatch}){
        try{
            const todo = {
                title: text,
                userId: 1,
                completed: false
            };
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo)
            });

            if(!response.ok){
                throw new Error('не могу добавить запись!');
            }

            const data = await response.json();
            console.log(data);
            dispatch(addTodo(data))

        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const setError = (state, action) =>{
    state.statuss = 'error';
    state.error = action.payload;
}

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
            // console.log(state);
            // console.log(action);

            state.todos.push(action.payload);

            // state.todos.push({
            //     id: new Date().toISOString(),
            //     text: action.payload.text,
            //     completed: false
            // })
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
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggeleTodos.rejected]: setError,
        [addTodoAsync.rejected]: setError 
    }
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;
