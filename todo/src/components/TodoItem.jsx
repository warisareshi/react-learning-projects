import React, { useState } from "react";
import { useTodo } from "../TodoContext";

const TodoItem = ({ todo }) => {
  const { removeTodo, toggleTodo, updateTodo} = useTodo();
  const [text, setText] = useState(todo.text);
  const [editing, setEditing] = useState(false);

   const editTodo = () => {
     updateTodo(todo.id, { ...todo, todo: text });
     setEditing(false);
   };

  return (
    <div className="flex flex-row items-center justify-between w-[430px] max-w-[430px] p-1 rounded-md gap-1">
      <div className="flex flex-row items-center gap-3">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 rounded-sm"
        />


        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            editing ? "border-black/10 px-2 bg-slate-200" : "border-transparent"
          } ${todo.isDone ? "line-through" : ""}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          readOnly={!editing}
        />
      </div>
      <div>
        <button
          onClick={() => removeTodo(todo.id)}
          className="px-2 py-0.5 bg-gray-100 border-2 border-gray-200 rounded-md hover:bg-red-300"
        >
          🗑
        </button>
        <button
          className="px-2 py-0.5 border-2 bg-gray-100 border-gray-200 rounded-md hover:bg-blue-300"
          onClick={() => {
            if (todo.isDone) return;
            if (editing) {
              editTodo();
            } else setEditing((prev) => !prev);
          }}
          disabled={todo.isDone}
        >
          {editing ? "Done" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
