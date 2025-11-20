import { useState, useEffect } from "react";
function CRUDoperations(params) {
  const [task, setTask] = useState([]);
    const [taskInput, setTaskInput] = useState("");
  
    useEffect(() => {
      console.log("🔄 Tasks updated:", task);
    }, [task]);
  
    const handleTask = () => {
      if (taskInput.trim() !== "") {
        const newTasks = [...task, taskInput];
        setTask(newTasks);
        setTaskInput("");
        console.log("➕ Adding task:", taskInput);
        console.log("📝 New tasks array:", newTasks);
      }
    };
  
    const handleDeleteTask = (index) => {
      const deletedTask = task.filter((_, i) => i !== index);
      setTask(deletedTask);
      console.log("🗑️ Deleting task at index:", index);
      console.log("📝 Remaining tasks:", deletedTask);
    };
  
    const handleUpdateTask = (index) => {
      const updatedTask = prompt("Update your task:", task[index]);
      if (updatedTask !== null && updatedTask.trim() !== "") {
        
        const updateWithNewTask = task.map((item, i) =>
          i === index ? updatedTask : item
        );
        setTask(updateWithNewTask);
        console.log("✏️ Updating task at index:", index);
        console.log("📝 Updated tasks array:", updateWithNewTask);
      }
    };
  return(
    <>
    
      <input
        type="text"
        placeholder="Enter Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type="button" onClick={handleTask}>
        Add Task
      </button>
      {task.map((item, index) => (
        <li
          key={index}
          style={{
            padding: "10px",
            margin: "5px 0",
            border: "1px solid #1ac9f4ff",
            borderRadius: "4px",
            backgroundColor: "#676262ff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {item}
          <div>
            <button onClick={() => handleUpdateTask(index)}>Update</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </>
  )

  
}
export default CRUDoperations;