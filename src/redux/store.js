import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentReducer, postReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
});
const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
