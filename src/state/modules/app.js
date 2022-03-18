import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentId: 4,
    todos: [
      {
        id: 1,
        text: 'Item 1',
        state: 'todo',
      },
      {
        id: 2,
        text: 'Item 2',
        state: 'todo',
      },
      {
        id: 3,
        text: 'Item 3',
        state: 'done',
      },
    ],
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
  },
});

export default appSlice.reducer;
export const { addTodo, changeTodoState } = appSlice.actions;
