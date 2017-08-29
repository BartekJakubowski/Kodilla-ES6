import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    let elements = props.data.map(todo => 
        <li key={todo.id}>{todo.text}<button onClick={() => props.remove(todo.id)}>Remove todo</button></li>);

    return (
        <div className={style.ListStyles}>
            <ul>{elements}</ul>
        </div>
    );
}

export default TodoList;