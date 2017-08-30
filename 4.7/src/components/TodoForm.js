import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <label>
                To Do:
                <input type='text' name='todo' />
            </label>
            <input type='button' value='add todo' onClick={(val) => props.add(val)} />
        </form>
    );
}

export default TodoForm;