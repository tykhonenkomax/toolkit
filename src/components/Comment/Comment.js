import React from 'react';
import {useDispatch} from "react-redux";
import {commentActions} from "../../redux";

const Comment = ({comment}) => {

    const dispatch = useDispatch();

    const {name, email} = comment;

    return (

        <div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <button onClick={()=> dispatch(commentActions.setCurrentComment(comment))}>select</button>
        </div>

    );
};

export {Comment}