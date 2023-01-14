import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserServices} from "../../services";

let initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await UserServices.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    });

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
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

const {reducer: userReducer, actions: {setCurrentUser}} = userSlice;

const userActions = {
    getAll,
    setCurrentUser
}
export {
    userActions,
    userReducer
}