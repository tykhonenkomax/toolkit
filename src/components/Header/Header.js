import React from 'react';

import css from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);
    const {currentComment} = useSelector(state => state.commentReducer);

    return (
        <div className={css.Header}>
            User: {currentUser && currentUser.name}
            <br/>
            Post: {currentPost && currentPost.title}
            <br/>
            Comment: {currentComment && currentComment.name}
        </div>
    );
};

export {Header}