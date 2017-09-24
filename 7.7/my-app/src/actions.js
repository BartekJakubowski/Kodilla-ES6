import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMBS_UP = 'THUMBS_UP';
export const THUMBS_DOWN = 'THUMBS_DOWN';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbsUp(id) {
    return {
        type: THUMBS_UP,
        id: id
    }
}

function thumbsDown(id) {
    return {
        type: THUMBS_DOWN,
        id: id
    }
}

export {addComment};
export {editComment};
export {removeComment};
export {thumbsUp};
export {thumbsDown};