import Elysia from "elysia";
import swagger from "@elysiajs/swagger";
import { todoItemRoute } from "./todo-item";

export const ElysiaMainInstance = new Elysia({ prefix: "/api" })
	.use(swagger())
	.use(todoItemRoute)
	.get("/", () => "Hello World!")
	.listen(3000);

export default ElysiaMainInstance;

console.log(
	`🦊 Elysia is running at ${ElysiaMainInstance.server?.hostname}:${ElysiaMainInstance.server?.port}`,
);
