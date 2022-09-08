import React from "react";
import TodoItem from "./TodoItem";
import { useTasks } from "./TodoProvider";


export default function TodoList() {
    const {tasks }= useTasks();

  return (
    <table>
        <tbody>
            {
                tasks.map((task,id)=> <TodoItem key={id} {...task}/>
                )
            }
        </tbody>
    </table>
  )
 }
