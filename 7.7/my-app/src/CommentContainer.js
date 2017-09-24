import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbsUp } from './actions.js';
import { thumbsDown } from './actions.js';
import {removeComment } from './actions.js';

const mapDispatchToProps = dispatch => ({
    thumbsUp: (id) => dispatch(thumbsUp(id)),
    thumbsDown: (id) => dispatch(thumbsDown(id)),
    removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);