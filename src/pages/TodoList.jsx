import { useState } from "react";
import { CardTask } from "../components/CardTask.jsx";

export function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    const date = new Date();
    const objTask = {
      id: date.getTime(),
      title: task,
      date: date.toLocaleDateString(),
      complete: 0,
    };
    setTasks([...tasks, objTask]);
  };

  const onComplete = (id) => {
    const newTaks = tasks.map((e) => {
      if (e.id == id) {
        e.complete = 1;
      }
      return e;
    });

    setTasks(newTaks);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };

  return (
    <>
      <h1>Listado de Tareas</h1>
      <input
        type="text"
        className="input-text-task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Insert To Task"
      />
      <input
        type="button"
        value="Add Task"
        className="btn-task"
        onClick={addTask}
      />

      {tasks.length > 0 ?tasks.map((e) => (
        <CardTask
          title={e.title}
          date={e.date}
          complete={e.complete}
          id={e.id}
          onComplete={onComplete}
          onDelete={onDelete}
          key={e.id}
        />
      )) : 'Add Tasks'}
    </>
  );
}
