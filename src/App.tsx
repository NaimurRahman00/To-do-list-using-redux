import { Provider } from "react-redux"
import store from "./store/store"
import { Container, Typography } from "@mui/material"
import AddTodoForm from "./components/add-todo-form"
import TodoList from "./components/todo-list"

function App() {

  return (
    <>
      <Provider store={store}>
        <Container maxWidth='md'>
          <Typography
            component='h1'
            variant="h2"
            align="center">
            Habit list
          </Typography>
          <AddTodoForm/>
          <TodoList />
        </Container>
      </Provider>
    </>
  )
}

export default App
