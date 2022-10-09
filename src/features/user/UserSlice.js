import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, getUserDetails } from "./userAction";

const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
const initialState = {
  loading: false,
  userInfo: null,
  userToken: {},
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [registerUser.fulfilled]: (state, {payload}) => {
      state.loading = false
      state.success = true
    },
    [registerUser.rejected]: (state, {payload}) => {
      state.loading = false
      state.error = payload
    },
    [getUserDetails.pending]: (state) => {
      state.loading = true
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
    }
  },
})

export default userSlice.reducer;