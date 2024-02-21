import React, { useState } from 'react';
import Task from './Task';
import './TodoList.css'
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, importance: 'low' }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateImportance = (taskId, newImportance) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, importance: newImportance } : task
    ));
  };

  return (
    <div>
      <div className='body'>
      <h2 style={{color:' rgb(5, 118, 163)'}}>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <div>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} onUpdateImportance={updateImportance} />
        ))}
      </div>

      <div>
        <h3>Overall Task Progress:<span className='progress'> {((tasks.filter(task => task.completed).length / tasks.length) * 100).toFixed(2)}%</span></h3>
      </div>
    </div>
    </div>
  );
};

export default TodoList;
