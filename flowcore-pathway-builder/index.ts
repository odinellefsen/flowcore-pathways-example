import { z } from "zod";
import { PathwaysBuilder } from "@flowcore/pathways";

// Create a pathways builder
const FlowcorePathwaysBuilder = new PathwaysBuilder({
	baseUrl: "https://api.flowcore.io",
	tenant: "odinellefsen",
	dataCore: "todo-app",
	apiKey: Bun.env.FLOWCORE_API_KEY,
});

export default FlowcorePathwaysBuilder;
