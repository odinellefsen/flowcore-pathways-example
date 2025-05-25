import { Type } from "@sinclair/typebox";

export const todoItemCreateSchema = Type.Object({
	todoId: Type.String(),
	timestamp: Type.String(),
	action: Type.String(),
});

export const todoItemUpdateSchema = Type.Object({
	todoId: Type.String(),
	timestamp: Type.String(),
	action: Type.String(),
});

export const todoItemArchiveSchema = Type.Object({
	todoId: Type.String(),
	timestamp: Type.String(),
	action: Type.String(),
});
