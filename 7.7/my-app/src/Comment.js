import React from 'react';

const Comment = ({text, votes, id, thumbsUp, thumbsDown, removeComment}) => 
    <li>
        {text} <span>votes: {votes}</span> 
        <button onClick={() => thumbsUp(id)}>Thumbs Up</button> 
        <button onClick={() => thumbsDown(id)}>Thumbs Down</button>
        <button onClick={() => removeComment(id)}>x</button>
    </li>;

export default Comment;