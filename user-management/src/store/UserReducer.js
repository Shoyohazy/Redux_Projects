
import { createSlice } from "@reduxjs/toolkit";

const initialState = {users : []};

const UserReducer = createSlice({
    name : 'users',
    initialState,
    reducers:{
        addUsers(state , action){
            state.users.push(action.payload);
        },
        deleteUsers(state , action){
            state.users.splice(action.payload, 1);
        }
    }
}
);

export const {addUsers , deleteUsers} = UserReducer.actions;
export default UserReducer.reducer;