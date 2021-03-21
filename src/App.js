import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false);

  const [tasklist, setTasks] = useState([]);

  useEffect(() => {
    const fetchtasks = async () => {
      const res = await fetch("http://localhost:8000/tasks");
      const result = await res.json().then((data) => {
        // console.log("Data2 ", data);
        setTasks(data);
      });
    };

    fetchtasks();
  }, []);


  const getSingleTask = async (id) => {
    const result = await fetch(`http://localhost:8000/tasks/${id}`);

    const task = await result.json();
    return task;
  }

  const deleteTask = async (id) => {
    // console.log("delete", id);
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasklist.filter((task) => task.id !== id));
  };

  const handleReminder = async (id) => {
    // console.log("clicked");
    const task = getSingleTask(id);
    const updatetask = { ...task, reminder: !task.reminder };

    // console.log(await res.json());
    const resp = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatetask)
    });

    const updatedResult = await resp.json();
    // const updatedList = [...tasklist.filter((task) => task.id !== id ), updatedResult ]
    // setTasks(updatedList);

    setTasks(
      tasklist.map((task) =>
        task.id === id ? { ...task, reminder: updatedResult.reminder } : task
      )
    );
  }

  const addTask = async (task) => {
    console.log("task ", task);
    const result = await fetch("http://localhost:8000/tasks/", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const newtask = await result.json();

    setTasks([...tasklist, newtask]);
  }

  return (
    <Router>
      <div className="container">
        <Header
          onToggleForm={() => setToggleAddTask(!toggleAddTask)}
          toggleBtnText={toggleAddTask}
        />

        {tasklist.length < 1 && <p>No tasks found</p>}
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {toggleAddTask && <AddTask onAddTask={addTask} />}

              {!toggleAddTask && tasklist.length > 0 && (
                <Tasks
                  tasks={tasklist}
                  delTask={deleteTask}
                  updateReminder={handleReminder}
                />
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
