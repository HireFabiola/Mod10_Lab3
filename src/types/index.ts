
export interface Todo{
    text: string,
};

export type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
};

export type TodoItemProps = {
  todo: Todo;
};