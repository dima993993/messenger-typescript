import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: null,
}
const themeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getAuthUser(state, action) {
            state.authUser = action.payload;
        }
    }
})

export const { getAuthUser } = themeSlice.actions;

export default themeSlice.reducer;