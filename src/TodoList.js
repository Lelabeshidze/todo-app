import React from "react";
import TodoItem from "./TodoItem";
import TodoProvider, { useTasks } from "./TodoProvider";

export default function TodoList() {
    const {tasks }= useTasks();

  return (
    <table  className="table">
        <tbody>
            {
                tasks.map((task,id)=> <TodoItem key={id} {...task}/>
                )
            }
        </tbody>
    </table>
  )
 }
