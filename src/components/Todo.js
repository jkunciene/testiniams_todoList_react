import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    const [tasks, setTasks] = useState([
        {
            text: 'Clean your room',
            isCompleted: false
        },
        {
            text: 'Do your homework',
            isCompleted: true
        },
        {
            text: 'To go to the cinema',
            isCompleted: true
        }
    ]);

    const insertTodo = text => {
        const newTodo = [...tasks, {text}];
        setTasks(newTodo);
    }

    return (
        <div>
        <div className="table table-dark mt-5">
            {tasks.map((task, index) =>(
                <TodoList key={index} task={task} index={index}/>
            ))}

           
        </div>
                 <TodoForm insertTodo={insertTodo}/>
        </div>
    )
}

export default Todo
