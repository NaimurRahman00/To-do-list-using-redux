import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly';
  completedDates: string[];
  createdAt: string;
}

interface TodoState {
  Todos: Todo[];
}

const initialState: TodoState = {
  Todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ name: string; frequency: 'daily' | 'weekly' }>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toLocaleString(),
      }

      state.Todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<{ id: string; date: string }>) => {
      const todo = state.Todos.find((t) => t.id === action.payload.id);
      if (todo) {
        const index = todo.completedDates.indexOf(action.payload.date);
        if(index> -1){
          todo.completedDates.splice(index, 1)
        } else {
          todo.completedDates.push(action.payload.date)
        }
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.Todos = state.Todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer