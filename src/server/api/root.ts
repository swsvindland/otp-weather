import { createTRPCRouter } from "y/server/api/trpc";
import {weatherRouter} from "y/server/api/routers/weather";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  weather: weatherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
