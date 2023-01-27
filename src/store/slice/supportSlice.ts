import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfoPanel: false,
    navSwitcher: 'chats',
}
const supportSlice = createSlice({
    name: "support",
    initialState,
    reducers: {
        toggleUserInfoPanel(state, action) {
            state.userInfoPanel = action.payload;
        },
        switchNavBar(state, action) {
            state.navSwitcher = action.payload
        }
    }
})

export const { toggleUserInfoPanel, switchNavBar } = supportSlice.actions;
export default supportSlice.reducer;