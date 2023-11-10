import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import logger from 'redux-logger';



export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  //might cause problem later.we'll see.
});
