
import { createSlice } from "@reduxjs/toolkit";

const initialState = {Users : []};

const UserReducer = createSlice({
    name : 'users',
    initialState,
    reducers:{
        AddUsers(state , action){
            state.push(action.payload);
        }
    }
}
);

export const {AddUsers} = UserReducer.actions;
export default UserReducer;