
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Box, Grid, Paper, Typography } from '@mui/material';

const TodoList: React.FC = () => {
    const { Todos } = useSelector((state: RootState) => state.todos);

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
                            <Typography variant='h6'>{todo.name}</Typography>
                            <Typography variant='body2' color='text.secondary'>{todo.frequency}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            })}
        </Box>
    )
}

export default TodoList;