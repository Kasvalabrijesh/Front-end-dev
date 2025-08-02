import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.find(user => user.id === id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
