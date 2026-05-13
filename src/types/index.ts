
export interface Todo{
    text: string,
};

export type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
};