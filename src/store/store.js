import { configureStore } from "@reduxjs/toolkit";
import { newUserSlice }  from "../features/newUserSlice";
import { todoSlice } from "../features/todoSlice"
import { postSlice } from "../features/postSlice";

export const store = configureStore({
 reducer: {
    users: newUserSlice.reducer,
    todo: todoSlice.reducer,
    posts: postSlice.reducer
 }
});

