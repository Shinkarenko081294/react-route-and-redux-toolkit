import {useDispatch} from 'react-redux';

import {removeTodo} from '../../store/todoSlice';
import {toggleTodo} from '../../store/todoSlice';

const TodoItem = ({id, text, complited}) =>{

    const dispatch = useDispatch();


    return (
        <li>
            <input type="checkbox" checked={complited} onChange={() => dispatch(toggleTodo({id}))}/>
            <span>{text}</span>
            <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    )
}

export {TodoItem}