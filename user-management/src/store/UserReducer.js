
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {users : [] , isUpdating:false, updateUser: null};

const UserReducer = createSlice({
    name : 'users',
    initialState,

    reducers:{
        addUsers(state , action){
            state.users.push({  id: nanoid() ,...action.payload});
        },
        deleteUsers(state , action){
            state.users.splice(action.payload, 1);
        },
        updateUsers(state,  action) {
            const { id, data} =  action.payload;
            const userIndeex = state.users.findIndex((user) => user.id === id);
            state.users[userIndeex] = data;
        },
        changeIsUpdating(state, action){
            state.isUpdating = !state.isUpdating
        },
        addUpdateUser(state, action) {
            state.updateUser = action.payload;
        },
        deleteUpdatedUser(state) {
            state.updateUser = null;
        }
    }
}
);

export const {addUsers , deleteUsers, updateUsers , changeIsUpdating, addUpdateUser, deleteUpdatedUser} = UserReducer.actions;
export default UserReducer.reducer;