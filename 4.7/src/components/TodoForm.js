import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <label>
                To Do:
                <input type='text' name='todo' onChange={(event) => props.changeVal(event.target.value)} value={props.inputValue} />
            </label>
            <input type='button' value='add todo' onClick={(val) => props.add(props.inputValue)} />
        </form>
    );
}

export default TodoForm;