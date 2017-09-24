import { ADD_COMMENT } from './actions';
import { EDIT_COMMENT } from './actions';
import { REMOVE_COMMENT } from './actions';
import { THUMBS_UP } from './actions';
import { THUMBS_DOWN } from './actions';

export default function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return comment.text = action.text;
                } else {
                    return comment;
                }
            });
        case THUMBS_UP:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                } else {
                    return comment;
                }
            });
        case THUMBS_DOWN:
            return state.map(comment => {
                if(comment.id === action.id) {
                   return {...comment, votes: comment.votes - 1}
                } else {
                    return comment;
                }
            });
        default:
            return state;
    }
}