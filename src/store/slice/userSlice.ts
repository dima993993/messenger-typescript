import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: [],
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUsers(state, action) {
            state.allUsers = action.payload.allUsers;
        }, 
    }
})

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;