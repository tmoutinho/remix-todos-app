export type Todo = {
  id: number;
  title: string;
};

const Todos = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Play with dog" },
  { id: 3, title: "Go to the gym" },
];

export async function getTodos(): Promise<Array<Todo>> {
  return Todos;
}

export async function createTodo(title: string) {
  return Todos.push({ id: Todos.length + 1, title });
}
