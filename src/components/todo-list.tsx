
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList: React.FC = () => {
  const { Todos } = useSelector((state: RootState) => state.todos);

  const today = new Date().toLocaleDateString().split('T')[0];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      marginTop: 4,
    }}>
      {Todos.map((todo) => {
        return <Paper key={todo.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid>
              <Typography variant='h6' sx={{ textTransform: 'capitalize' }}>{todo.name}</Typography>
              <Typography variant='body2' color='text.secondary' sx={{ textTransform: 'capitalize' }}>{todo.frequency}</Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 1}}>
                <Button variant='outlined'
                color={
                  todo.completedDates.includes(today) ? 'success' : 'primary'
                } startIcon={<CheckCircleIcon />}>Mark Complete</Button>
                <Button variant='outlined'
                color='error'
                startIcon={<DeleteIcon />} >Remove</Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      })}
    </Box>
  )
}

export default TodoList;