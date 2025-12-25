import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  console.log("Rendering TodoItem:", todo.task);

  return (
    <li
      style={{
        marginBottom: "8px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        width: "240px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: todo.completed ? "#e6ffe6" : "#ffe6e6",
      }}
    >
      {todo.task}

      <button
        onClick={() => onToggle(todo.id)}
        style={{
          padding: "4px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {todo.completed ? "Completed" : "Pending"}
      </button>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default React.memo(TodoItem);
