import { z } from "zod";

export const todoItemCreateSchema = z.object({
	todoId: z.string(),
	timestamp: z.string(),
	action: z.string(),
});

export const todoItemUpdateSchema = z.object({
	todoId: z.string(),
	timestamp: z.string(),
	action: z.string(),
});

export const todoItemArchiveSchema = z.object({
	todoId: z.string(),
	timestamp: z.string(),
	action: z.string(),
});
