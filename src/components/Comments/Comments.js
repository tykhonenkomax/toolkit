import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {commentActions} from "../../redux";

import {CommentServices} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.commentReducer);

    useEffect(() => {
        CommentServices.getAll().then(({data}) => dispatch(commentActions.getAll(data)))
    }, [])

    return (

        <div>
            {
                comments && comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </div>

    );
};

export {Comments}