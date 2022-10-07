import {useDispatch} from 'react-redux';

import {removeTodo} from '../../store/todoSlice';
import {toggleTodo} from '../../store/todoSlice';

import stItem from './Todoitem.module.css';

const TodoItem = ({id, text, complited}) =>{

    const dispatch = useDispatch();


    return (
        <li className={stItem.liTodo}>
            <input type="checkbox" checked={complited} onChange={() => dispatch(toggleTodo({id}))}/>
            <div className={stItem.textTodo}>{text}</div>
            <div className={stItem.delTodo} onClick={() => dispatch(removeTodo({id}))}>Delete</div>
        </li>
    )
}

export {TodoItem}