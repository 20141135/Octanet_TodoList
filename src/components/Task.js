import React from 'react';
import './Task.css';
const Task = ({ task, onDelete, onToggle, onUpdateImportance }) => {
  const handleImportanceClick = () => {
    // Toggle the importance level (cycle through 'high', 'medium', 'low')
    const importanceLevels = ['high', 'medium', 'low'];
    const currentImportanceIndex = importanceLevels.indexOf(task.importance);
    const newImportanceIndex = (currentImportanceIndex + 1) % importanceLevels.length;
    const newImportance = importanceLevels[newImportanceIndex];
    
    onUpdateImportance(task.id, newImportance);
  };

  return (
    <div>
     <div className='Task'>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='taskName'>{task.text}</span>
      <button className='importance' onClick={handleImportanceClick} style={{ color: getImportanceColor(task.importance) }}>★</button>
      <button className='toggle' onClick={() => onToggle(task.id)}>Completed</button>
      <button className='delete' onClick={() => onDelete(task.id)}>Delete</button>
    </div>
    </div>
  );
};

// Helper function to get color based on importance level
const getImportanceColor = (importance) => {
  switch (importance) {
    case 'high':
      return 'red';
    case 'medium':
      return 'yellow';
    case 'low':
      return 'green';
    default:
      return 'black';
  }
};

export default Task;
