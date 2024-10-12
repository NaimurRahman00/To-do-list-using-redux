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
        addTodo: (state, action:PayloadAction<{name: string; frequency: 'daily' | 'weekly'}>) => {
            const newTodo:Todo = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toLocaleString(),
            }

            state.Todos.push(newTodo);
        }
    },
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer