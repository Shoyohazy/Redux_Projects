
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";

const store = configureStore({
    reducer : UserReducer
})

export default store;