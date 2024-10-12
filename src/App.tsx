import { Provider } from "react-redux"
import store from "./store/store"
import { Container, Typography } from "@mui/material"
import AddTodoForm from "./components/add-todo-form"

function App() {

  return (
    <>
      <Provider store={store}>
        <Container maxWidth='md'>
          <Typography
            component='h1'
            variant="h2"
            align="center">
            Todo list
          </Typography>
          <AddTodoForm/>
        </Container>
      </Provider>
    </>
  )
}

export default App
