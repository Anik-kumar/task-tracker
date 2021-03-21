import { FaTimes } from "react-icons/fa";

const Task = ({task, delTask, updateReminder}) => {
  return (
    <div className="task" onDoubleClick={() => updateReminder(task.id)}>
      <h3> 
        {task.text} 
        <FaTimes style={{color: "red", cursor: 'pointer'}} onClick={() => delTask(task.id)} /> 
      </h3>
      <p> {task.day} </p>
    </div>
  )
}

export default Task;