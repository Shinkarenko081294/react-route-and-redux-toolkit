import {useDispatch} from 'react-redux';

import {deleteTodo} from '../../store/todoSlice';
import {toggeleTodos} from '../../store/todoSlice';

import stItem from './Todoitem.module.css';

const TodoItem = ({id, title, completed}) =>{

    const dispatch = useDispatch();


    return (
        <li className={stItem.liTodo}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggeleTodos(id))}/>
            <div className={stItem.textTodo}>{title}</div>
            <div className={stItem.delTodo} onClick={() => dispatch(deleteTodo(id))}>Delete</div>
        </li>
    )
}

export {TodoItem}