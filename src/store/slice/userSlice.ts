import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: [],
    authUser: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUsers(state, action) {
            
            state.allUsers = action.payload.allUsers;
            state.authUser = action.payload.authUser;
        }, 
    }
})

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;