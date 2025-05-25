import Elysia from "elysia";
import { todoItemRoute } from "./todo-item";

export const ElysiaMainInstance = new Elysia({ prefix: "/api" })
	.get("/", () => "Hello World!")
	.use(todoItemRoute)
	.listen(3000);

export default ElysiaMainInstance;

console.log(
	`🦊 Elysia is running at ${ElysiaMainInstance.server?.hostname}:${ElysiaMainInstance.server?.port}`,
);
