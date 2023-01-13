import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
};
const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.posts = action.payload
        },
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        }
    }
});

const {reducer: postReducer, actions: {getAll, setCurrentPost}} = postSlice;

const postActions = {
    getAll,
    setCurrentPost
}

export {
    postActions,
    postReducer
}