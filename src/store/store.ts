import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todo-slice'

export default configureStore({
    reducer: {
        todos: todosReducer
    },
})