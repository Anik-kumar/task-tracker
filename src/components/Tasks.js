import Task from "./Task";


const Tasks = ({tasks, delTask, updateReminder}) => {

  return (
    <div>
      {tasks.map(task => (
        <Task task={task} key={task.id} delTask={delTask} updateReminder={updateReminder} />
      ))}
    </div>
  )
}

export default Tasks;