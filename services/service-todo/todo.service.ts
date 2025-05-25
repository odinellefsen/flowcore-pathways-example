import FlowcorePathwaysBuilder from "../../flowcore-pathway-builder";
import {
	todoItemCreateSchema,
	todoItemUpdateSchema,
} from "../../contracts/todo-item";
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
	update(
		todoId: string,
		action: string,
		formerUpdateTimestamps: string[],
		originalTimestamp: string,
	) {
		const timestamp = new Date().toLocaleString("fo-FO", {
			timeZone: "Atlantic/Faroe",
		});

		FlowcorePathwaysBuilder.register({
			flowType: flowcoreTodoItemsStructure.flowType,
			eventType: flowcoreTodoItemsStructure.eventTypes.todoUpdatedV0,
			schema: todoItemUpdateSchema,
		}).write(
			`${flowcoreTodoItemsStructure.flowType}/${
				flowcoreTodoItemsStructure.eventTypes.todoUpdatedV0
			}`,
			{
				todoId,
				action,
				updatedTimestamps: [...formerUpdateTimestamps, timestamp],
				originalTimestamp,
			},
		);
	}
}
