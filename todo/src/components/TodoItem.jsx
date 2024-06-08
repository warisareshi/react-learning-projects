import React from "react";
import { useTodo } from "../TodoContext";

const TodoItem = ({todo}) => {

  const {todos, toggleTodo, removeTodo} = useTodo();

  return (
    <div className="flex flex-row items-center justify-between w-96 p-1 rounded-md gap-1">
      <input
        type="checkbox" 
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
        className="w-6 h-6 rounded-sm"
      />

      {todo.editing ? (
        <input
          type="text"
          value={todo.text}
          onChange={(e) => editTodo(todo.id, e.target.value)}
          className="w-full p-1 border-2 border-gray-300 rounded-md"
        />
      ) : (
        <div
          className={`text-black w-full p-2  ${
            todo.isDone ? "line-through" : ""
          }`}
        >
          {todo.text}
        </div>
      )}

      <button
        onClick={() => removeTodo(todo.id)}
        className="px-2 py-0.5 bg-gray-100 border-2 border-gray-200 rounded-md hover:bg-red-300"
      >
        🗑
      </button>
      <button
        onClick={() => setEditing(todo.id)}
        className="px-2 py-0.5 bg-gray-100 border-2 border-gray-200 rounded-md hover:bg-red-300"
      >
        {todo.editing ? "💾" : "✍️"}
      </button>
    </div>
  );
};

export default TodoItem;
