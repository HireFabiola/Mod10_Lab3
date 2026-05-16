
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
};

export type TodoItemProps = {
  todo: Todo;
};