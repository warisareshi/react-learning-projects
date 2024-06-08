import { useState, useEffect } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./TodoContext";

export default function App() {
  const [todos, setTodos] = useState([]);

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
      { id: crypto.randomUUID(), text: todo, isDone: false},
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // filter always cares about what to keep
  };

  const updateTodo = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, text: text} : todo)))
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <TodoProvider value={{ todos, addTodo, removeTodo, toggleTodo, updateTodo }}>
        <section className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-100">
            <h1 className="text-3xl font-bold">Todo List</h1>
          <TodoForm />
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