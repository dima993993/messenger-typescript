import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
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
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        checkError(state, action) {
            state.error = action.payload.error;
        }
    }
})

export const { setUser, removeUser, checkError } = authSlice.actions;
export default authSlice.reducer;