import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addTodo } from '../store/todo-slice';

const AddTodoForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            dispatch(
                addTodo({
                    name, frequency
                })
            );
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}>
                <TextField
                    label='Habit name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter Habit name'
                    fullWidth />
                <FormControl>
                    <InputLabel sx={{bgcolor: 'white', padding: 0.5}}>Frequency</InputLabel>
                    <Select value={frequency}
                        onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}>
                        <MenuItem value='daily'>Daily</MenuItem>
                        <MenuItem value='weekly'>Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant='contained' color='primary'>Add a new habit</Button>
            </Box>
        </form>

    )
}

export default AddTodoForm