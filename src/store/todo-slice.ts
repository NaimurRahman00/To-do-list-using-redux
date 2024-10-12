import { createSlice } from "@reduxjs/toolkit";

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
        addTodo: () => {}
    },
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer