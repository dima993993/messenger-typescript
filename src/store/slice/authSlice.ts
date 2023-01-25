import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    error: false,
    userInfo: null,
    
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.userInfo = action.payload.userInfo
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.userInfo = null;
        },
        checkError(state, action) {
            state.error = action.payload.error;
        }
    }
})

export const { setUser, removeUser, checkError } = authSlice.actions;
export default authSlice.reducer;