import Elysia from "elysia";

export const ElysiaMainInstance = new Elysia({ prefix: "/api" }).get(
	"/",
	() => "Hello World!",
);

export default ElysiaMainInstance;

console.log(
	`🦊 Elysia is running at ${ElysiaMainInstance.server?.hostname}:${ElysiaMainInstance.server?.port}`,
);
