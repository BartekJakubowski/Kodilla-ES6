import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    let elements = props.data.map(props => 
        <p>{props.id}: {props.text} <button onClick={props.remove}>Remove</button></p>);

    return (
        <div className={style.ListStyles}>
            <div>{elements}</div>
        </div>
    );
}


export default TodoList;