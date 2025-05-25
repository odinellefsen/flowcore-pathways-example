import FlowcorePathwaysBuilder from "../../flowcore-pathway-builder";
import { todoItemCreateSchema } from "../../contracts/todo-item";
import { flowcoreTodoItemsStructure } from "../../contracts/flowcore-endpoints";
import uuidv4 from "../../utility/uuidv4";

export class Todo {
	add(action: string) {
		const id = uuidv4();
		const timestamp = new Date().toLocaleString("fo-FO", {
			timeZone: "Atlantic/Faroe",
		});
		FlowcorePathwaysBuilder.register({
			flowType: flowcoreTodoItemsStructure.flowType,
			eventType: flowcoreTodoItemsStructure.eventTypes.todoCreatedV0,
			schema: todoItemCreateSchema,
		}).write("todo.v0/todo.created.v0", {
			todoId: id,
			timestamp,
			action,
		});
	}
}
