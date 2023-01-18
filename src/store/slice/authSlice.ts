import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    surname: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})
export default authSlice;