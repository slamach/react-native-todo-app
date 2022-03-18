import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: 'todo',
      });
    },
    changeTodoState: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[item].state =
        state.todos[item].state === 'todo' ? 'done' : 'todo';
      state.todos.push(state.todos.splice(item, 1)[0]);
    },
    trashTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});

export default appSlice.reducer;
export const { addTodo, changeTodoState, trashTodo } = appSlice.actions;
