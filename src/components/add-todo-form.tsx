import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

const AddTodoForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
        }}>
            <TextField
                label='Todo name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter todo name'
                fullWidth />
            <FormControl>
                <InputLabel>Frequency</InputLabel>
                <Select value={frequency}
                    onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}>
                    <MenuItem value='daily'>Daily</MenuItem>
                    <MenuItem value='weekly'>Weekly</MenuItem>
                </Select>
            </FormControl>
            <Button type='submit' variant='contained' color='primary'>Add todo</Button>
        </Box>
    )
}

export default AddTodoForm