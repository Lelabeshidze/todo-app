import React, { useState } from 'react'
import { useTasks } from './TodoProvider'

export default function TodoForm() {
    const [task,setTask] = useState('');
    const {addTask} = useTasks();

 const submit = e => {
    e.preventDefault();
    addTask(task);
    setTask('')
 }
  return (
    <form onSubmit={submit}>
        <input  type="text" value={task} placeholder="add task" onChange={e => setTask(e.target.value)} required></input>
        <button>Add</button>
    </form>
  )
}

