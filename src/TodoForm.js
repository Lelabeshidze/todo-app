import React, { useState } from 'react'
import { useTasks } from './TodoProvider'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
export default function TodoForm() {
    const [task,setTask] = useState('');
    const {addTask} = useTasks();

 const submit = e => {
    e.preventDefault();
    addTask(task);
    setTask('')
 }

  return (
    <form onSubmit={submit} className="Form">
        <TextField id="outlined-basic" label="new task" variant="outlined" type="text" value={task} onChange={e => setTask(e.target.value)} required/>
        <Button type="submit" variant="contained">Add Task</Button>
    </form>
  )
}

