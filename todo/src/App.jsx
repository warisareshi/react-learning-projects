import { useState, useEffect } from "react";
import "./index.css";
import { TodoInput, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: todo, isDone: false, editing: false },
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // filter always cares about what to keep
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const setEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  const editTodo = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-100">
        <div className="text-start">
          <h1 className="text-3xl font-bold">Todo List</h1>
        </div>
        <TodoInput todo={todo} addTodo={addTodo} setTodo={setTodo} />
        <div className="flex flex-col gap-[0px]">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              removeTodo={removeTodo}
              setEditing={setEditing}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
