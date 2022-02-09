import { configureStore } from '@reduxjs/toolkit';
import addToDoReducer from '../components/addToDo/addToDoSlice';

const store = configureStore({
  reducer: {
    todo: addToDoReducer,
  },
});

export default store;