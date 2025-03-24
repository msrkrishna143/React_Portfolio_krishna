import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };
 
  const RemoveTask = () => {
      const value =0;
    const newTasks = tasks.filter((_, i) => i !== value);
    setTasks(newTasks);
  };
 

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div className="grid-container">
        <div className="grid-item">
            <div className="header">
                <b>To-Do List</b>
            </div>
            <br/><br/>
            <div className="input-container">
                <input  type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task"/>
                <button onClick={addTask}>Add</button>
                <button onClick={RemoveTask}>Remove</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                        <li key={index} id={index} className={task.completed ? 'task completed' : 'task'}>
                        <span onClick={() => toggleTask(index)}>{task.text}</span> 
                        <button onClick={() => deleteTask(index)}>Delete</button> 
                        </li>
                ))}
            </ul>
       </div>   
    </div>
  );
}
export default TodoList;