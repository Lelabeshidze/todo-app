import React, { createContext, useState, useContext, useEffect } from "react";
import { v4 } from "uuid";
const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export default function TodoProvider({ children }) {
	const [tasks, setTasks] = useState(() => {
		
		const savedTodos = localStorage.getItem("tasks");
	
		if (savedTodos) {
		 
		  return JSON.parse(savedTodos);
		 
		} else {
		 
		  return [];
		}
	  });
	const addTask = (task) => {
		setTasks([
			...tasks,
			{
				id: v4(),
				task,
				complete: false,
			},
		]);
	};
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	},[tasks])

	const setTaskStatus = (id, status) => {
		setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: status } : t)));
	};
	return (
		<TaskContext.Provider value={{ tasks, addTask, setTaskStatus}}>
			{children}
		</TaskContext.Provider>
	);
}
