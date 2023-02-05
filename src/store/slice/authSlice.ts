import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    authUser: null,
    error: false,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.authUser = action.payload.authUser;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.authUser = null;
        },
        checkError(state, action) {
            state.error = action.payload.error;
        }
    }
})

export const { setUser, removeUser, checkError } = authSlice.actions;
export default authSlice.reducer;