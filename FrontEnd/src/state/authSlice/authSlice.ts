import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    user: {},
    errors: {},
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {

    },
})
export default authSlice.reducer