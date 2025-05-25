import { Type } from "@sinclair/typebox";

export const todoItemCreateSchema = Type.Object({
	todoId: Type.String(),
	timestamp: Type.String(),
	action: Type.String(),
});

export const todoItemUpdateSchema = Type.Object({
	todoId: Type.String(),
	originalTimestamp: Type.String(),
	updateTimestamps: Type.Array(Type.String()),
	action: Type.String(),
});

export enum TodoItemFinishedReason {
	Completed = "completed",
	Cancelled = "cancelled",
}

export const todoItemArchiveSchema = Type.Object({
	todoId: Type.String(),
	originalTimestamp: Type.String(),
	updateTimestamps: Type.Array(Type.String()),
	archivedTimestamp: Type.String(),
	action: Type.String(),
	reason: Type.Enum(TodoItemFinishedReason),
});
