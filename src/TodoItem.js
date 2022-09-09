import React from "react";
import { useTasks } from "./TodoProvider";
import { useState } from "react";

export default function TodoItem({ id, task, complete }) {
	const { setTaskStatus } = useTasks();
	const [tasks, setTasks] = useState([]);

	const deleteTask = ({ _id }) => tasks.remove(_id);
	const editTodo = (inx) => {
		const newTodos = [...tasks];
		setTasks(newTodos);
	};
	const checkTask = (e) => setTaskStatus(id, e.target.checked);
	return (
  		<tr>
			<td>
				<input type="checkbox" onChange={checkTask}></input>

			</td>
			<td>
				<span>{task}</span>
        {/* <button onClick={ () => onDeleteClick(task) }>remove task</button> */}
        <button onClick={editTodo}>edit</button>
			</td>
		</tr>
 

	);
}
