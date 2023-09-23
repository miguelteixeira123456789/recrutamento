import { useRef } from "react";

export function useTodo(initialItems?: string[]) {
  const todosRef = useRef<Array<string>>(initialItems || new Array());

  /* Add your todo methods here */

  return [Array.from(todosRef.current)];
}
