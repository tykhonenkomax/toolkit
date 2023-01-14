import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CommentServices} from "../../services";

let initialState = {
    comments: [],
    currentComment: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async(_, {rejectedWithValue})=>{
        try {
            const {data} = await CommentServices.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setCurrentComment: (state, action) => {
            state.currentComment = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.comments = action.payload
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

const {reducer: commentReducer, actions: {setCurrentComment}} = commentSlice;

const commentActions = {
    getAll,
    setCurrentComment
}

export {
    commentReducer,
    commentActions
}