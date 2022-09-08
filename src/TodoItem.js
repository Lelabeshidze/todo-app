import React from "react";
import { useTasks } from "./TodoProvider";


export default function TodoItem({id, task, complete}) {
   const {setTaskStatus} = useTasks();
   const checkTask = (e) => setTaskStatus(id, e.target.checked);
  return (
    <tr>
        <td>
            <input type="checkbox" onChange={checkTask}></input>
        </td>
        <td> 
            <span>{task}</span>
        </td>
    </tr>
  )
}
