import { useState } from "react";

import React from "react";
function TodoList() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setData([...data, { id: Date.now(), name: task, completed: false }]);
      setTask("");
       console.log(data);
    }
  };

  const ToggleTask = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button type="submit"> Add Task </button>
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ color: item.completed ? "red" : "green" }}>
            {item.name}
            <button onClick={() => ToggleTask(item.id)}>
              {item.completed ? "Completed" : "Pending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
