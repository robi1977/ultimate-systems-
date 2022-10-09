import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  'user/register',
  async({email, password}, {rejectWithValue}) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      }
      await axios.post(
        'api/v1/register',
        {email, password},
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },        
      }
      const { data } = await axios.post(
        '/api/v1/login/check',
        { email, password },
        config
      );

      localStorage.setItem('userToken', data.token); //FIXME: sprawdzić czy ma być data.token( specyfikacja) data.token
      return (data);
    } catch (error) {
      if(error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()

      const config = {
        headers: {
          'Authorization': `Bearer ${user.userToken}`
        }
      }
      const { data } = await axios.get(
        `/api/v1/auth/user`,
        config
      );
      return data;
    } catch (error) {
      if(error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)