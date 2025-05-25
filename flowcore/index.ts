import { z } from "zod";
import { PathwaysBuilder } from "@flowcore/pathways";

// Define your event schema
const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
});

// Create a pathways builder
const pathways = new PathwaysBuilder({
	baseUrl: "https://api.flowcore.io",
	tenant: "odinellefsen",
	dataCore: "todo-app",
	apiKey: Bun.env.FLOWCORE_API_KEY,
});

// Register a pathway
pathways
	.register({
		flowType: "user",
		eventType: "created",
		schema: userSchema,
	})
	.handle("user/created", async (event) => {
		console.log(`Processing user created event: ${event.eventId}`);
		console.log("User data:", event.payload);

		// Process the event...
	});
