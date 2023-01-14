import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PostServices} from "../../services/post.services";

let initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await PostServices.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    });

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.posts = action.payload
        // },
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
});

const {reducer: postReducer, actions: {setCurrentPost}} = postSlice;

const postActions = {
    getAll,
    setCurrentPost
}
export {
    postActions,
    postReducer
}