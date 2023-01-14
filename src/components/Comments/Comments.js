import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {commentActions} from "../../redux";

import {Comment} from "../Comment/Comment";

const Comments = () => {

    const dispatch = useDispatch();
    const {comments, error, loading} = useSelector(state => state.commentReducer);

    useEffect(() => {
        dispatch(commentActions.getAll())
    }, [])

    return (

        <div>
            {loading && <div>Loading..................</div>}
            {error && JSON.stringify(error)}
            {
                comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>

    );
};

export {Comments}