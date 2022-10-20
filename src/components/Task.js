import { FaTimes } from 'react-icons/fa';

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div key={task.id} className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => 
      onToggle(task.id)
    } >
      <h3>{
        task.text} 
        <FaTimes 
          style={{ color: '#d80000', cursor: 'pointer'}}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
