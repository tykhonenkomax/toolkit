import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

const Post = ({post}) => {
    const dispatch = useDispatch();

    const {title} = post;

    return (

        <div>
            <div>title: {title}</div>
            <button onClick={()=> {dispatch(postActions.setCurrentPost(post))}}>select</button>
        </div>

    );
};

export {Post}