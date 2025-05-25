import FlowcorePathwaysBuilder from "../../flowcore-pathway-builder";
import {
	todoItemArchiveSchema,
	todoItemCreateSchema,
	type TodoItemFinishedReason,
	todoItemUpdateSchema,
} from "../../contracts/todo-item";
import { flowcoreTodoItemsStructure } from "../../contracts/flowcore-endpoints";
import uuidv4 from "../../utility/uuidv4";

export class Todo {
	addItem(action: string) {
		const id = uuidv4();
		const createdTimestamp = new Date().toLocaleString("fo-FO", {
			timeZone: "Atlantic/Faroe",
		});
		const flowType = flowcoreTodoItemsStructure.flowType;
		const eventType = flowcoreTodoItemsStructure.eventTypes.todoCreatedV0;
		FlowcorePathwaysBuilder.register({
			flowType,
			eventType,
			schema: todoItemCreateSchema,
		}).write(`${flowType}/${eventType}`, {
			todoId: id,
			timestamp: createdTimestamp,
			action,
		});
	}
	updateItem(
		todoId: string,
		action: string,
		formerUpdateTimestamps: string[],
		originalTimestamp: string,
	) {
		const updatedTimestamp = new Date().toLocaleString("fo-FO", {
			timeZone: "Atlantic/Faroe",
		});
		const flowType = flowcoreTodoItemsStructure.flowType;
		const eventType = flowcoreTodoItemsStructure.eventTypes.todoUpdatedV0;

		FlowcorePathwaysBuilder.register({
			flowType: flowType,
			eventType: eventType,
			schema: todoItemUpdateSchema,
		}).write(`${flowType}/${eventType}`, {
			todoId,
			action,
			updateTimestamps: [...formerUpdateTimestamps, updatedTimestamp],
			originalTimestamp,
		});
	}
	archiveItem(
		todoId: string,
		formerUpdateTimestamps: string[],
		originalTimestamp: string,
		action: string,
		reason: TodoItemFinishedReason,
	) {
		const archivedTimestamp = new Date().toLocaleString("fo-FO", {
			timeZone: "Atlantic/Faroe",
		});
		const flowType = flowcoreTodoItemsStructure.flowType;
		const eventType = flowcoreTodoItemsStructure.eventTypes.todoArchivedV0;
		FlowcorePathwaysBuilder.register({
			flowType,
			eventType,
			schema: todoItemArchiveSchema,
		}).write(`${flowType}/${eventType}`, {
			todoId,
			originalTimestamp,
			updateTimestamps: [...formerUpdateTimestamps],
			archivedTimestamp,
			action,
			reason,
		});
	}
}
