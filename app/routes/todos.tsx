import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getTodos } from "~/models/todos.server";

type LoaderData = {
  todos: Awaited<ReturnType<typeof getTodos>>;
};

export const loader = async () => {
  return json<LoaderData>({
    todos: await getTodos(),
  });
};

const Todos = () => {
  const { todos } = useLoaderData<LoaderData>();

  return (
    <div>
      <h1>Todos</h1>
      <Link to="/new">New Post</Link>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
