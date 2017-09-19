import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMBS_UP = 'THUMBS_UP';
const THUMBS_DOWN = 'THUMBS_DOWN';

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

function thumbsUP(id) {
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