import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasklist, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School meeting",
      day: "Feb 20th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Go to Office",
      day: "Feb 29th at 8:00am",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasklist.filter((task) => task.id !== id));
  };

  const handleReminder = (id) => {
    // console.log("clicked");
    setTasks(
      tasklist.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  return (
    <div className="container">
      <Header />
      {tasklist.length > 0 ? (
        <Tasks tasks={tasklist} delTask={deleteTask} updateReminder={handleReminder} />
      ) : (
        "No Tasks Found"
      )}
    </div>
  );
}

export default App;
