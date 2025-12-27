import { app, setupApp } from "../server/app";
import { createServer } from "http";

// Initialize the app
const httpServer = createServer(app);

// This ensures routes are registered
setupApp(httpServer, app).catch((err) => {
    console.error("Failed to setup app:", err);
});

export default app;
