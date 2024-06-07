import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  todoText: "",
  setTodoText: () => {},
  setTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
  toggleTodo: () => {},
  setEditing: () => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;