import { FaTimes } from 'react-icons/fa'

export const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
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
