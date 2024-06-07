import { useState } from "react";
import "./index.css";
import { TodoInput, TodoItem } from "./components";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const [todoText, setTodoText] = useState("");

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: todo, isDone: false, editing: false },
    ]);
    console.log(todos)
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
      <TodoProvider
        value={{
          todos,
          todoText,
          setTodoText,
          setTodos,
          addTodo,
          removeTodo,
          editTodo,
          toggleTodo,
          setEditing,
        }}
      >
        <section className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-100">
          <div className="text-start">
            <h1 className="text-3xl font-bold">Todo List</h1>
          </div>
          <TodoInput />
          <div className="flex flex-col gap-[0px]">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </section>
      </TodoProvider>
    </>
  );
}

export default App;
