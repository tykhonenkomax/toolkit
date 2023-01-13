import React from 'react';

import css from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);

    return (
        <div className={css.Header}>
            {currentUser && currentUser.name}
            <br/>
            {currentPost && currentPost.title}
        </div>
    );
};

export {Header}