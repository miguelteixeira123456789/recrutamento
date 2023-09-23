class Todo {
  todos: Array<string>;

  constructor() {
    this.todos = new Array();
  }

  /* Add your todo methods here */
}

// Todo Service lifecycle management
const todo = global.todo || new Todo();
if (process.env.NODE_ENV !== "production") global.todo = todo;

export { Todo, todo as TodoService };
