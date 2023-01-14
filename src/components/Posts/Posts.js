import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../../redux";

import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts, error, loading} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (

        <div>
            {loading && <div>Loading...</div>}
            {error && JSON.stringify(error)}
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>

    );
};

export {Posts}