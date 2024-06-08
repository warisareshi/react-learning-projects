import { useContext } from "react";
import { createContext, useState } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  updateTodo: (id, text) => {},
  toggleTodo: (id) => {},
});
export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
