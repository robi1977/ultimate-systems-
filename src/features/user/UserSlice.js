import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    name: "",
    surname: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    isActive: true,
    errorMessage: "",
    successMessage: ""
  },
  reducers: {
    // TODO: Do uzupełnienia
  }
})

export const userSelector = state => state.user