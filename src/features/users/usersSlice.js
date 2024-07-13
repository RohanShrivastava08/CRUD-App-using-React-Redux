import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('users');
    if (serializedState === null) {
      return { users: [], editingUser: null };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return { users: [], editingUser: null };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('users', serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

const initialState = loadState();

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      saveState(state);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.userId === action.payload.userId);
      if (index !== -1) {
        state.users[index] = action.payload;
        saveState(state);
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.userId !== action.payload);
      saveState(state);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
  },
});

export const { addUser, updateUser, deleteUser, setEditingUser } = usersSlice.actions;

export default usersSlice.reducer;