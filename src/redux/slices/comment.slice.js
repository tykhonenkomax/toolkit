import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    comments: [],
    currentComment: null,
    loading: false,
    error: null
};
const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.comments = action.payload
        },
        setCurrentComment: (state, action) => {
            state.currentComment = action.payload
        }
    }
});

const {reducer: commentReducer, actions: {getAll, setCurrentComment}} = commentSlice;

const commentActions = {
    getAll,
    setCurrentComment
}

export {
    commentReducer,
    commentActions
}