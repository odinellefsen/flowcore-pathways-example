import Elysia from "elysia";

export const todoItemRoute = new Elysia({ prefix: "/todo-item" })
	.post("/", () => "hello world")
	.get("/list", () => "")
	.get(":itemId", () => "");
