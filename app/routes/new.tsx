import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { createTodo } from "~/models/todos.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");

  if (!title) {
    return json({ error: "Title is required" });
  }

  await createTodo(String(title));

  return redirect("/todos");
};

const NewTodo = () => {
  const actionData = useActionData();
  const transition = useTransition();

  return (
    <div>
      <h1>New Todo</h1>
      <Form method="post">
        <p>
          <label>Post Title:</label>
          <input type="text" name="title" />
          {actionData?.error && <span>{actionData?.error}</span>}
        </p>

        <button type="submit">
          {transition.state === "submitting" ? "Creating..." : "Create"}
        </button>
      </Form>
    </div>
  );
};

export default NewTodo;
