import { useState } from "react";

export function useTodo(initialItems?: string[]) {
  const [todos, setTodos] = useState<string[]>(initialItems || []);

  /* Add your todo methods here */
  const addItem = () => {
    setTodos((prevTodos) => [...prevTodos, "New todo"]);
  };

  return {
    todos,
    addTodo: addItem,
  };
}
