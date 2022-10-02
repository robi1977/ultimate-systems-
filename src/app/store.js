import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/user/UserSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer
  }
})
