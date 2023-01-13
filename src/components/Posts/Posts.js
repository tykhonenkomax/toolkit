import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../../redux";

import {PostServices} from "../../services/post.services";
import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.postReducer);

    useEffect(() => {
        PostServices.getAll().then(({data}) => dispatch(postActions.getAll(data)))
    }, [])

    return (

        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>

    );
};

export {Posts}