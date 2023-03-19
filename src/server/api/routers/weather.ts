import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "y/server/api/trpc";
import type {OpenWeatherResponse} from "y/server/api/types/OpenWeather";

export const weatherRouter = createTRPCRouter({
  getWeather: publicProcedure
    .input(z.object({ lat: z.number(), lon: z.number() }))
    .query(async ({ input }) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${input.lat}&lon=${input.lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
        return await response.json() as Promise<OpenWeatherResponse>
    }),

    getLatLongFromCityAndState: publicProcedure
        .input(z.object({ city: z.string(), state: z.string() }))
        .query(async ({ input }) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.city},${input.state}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
            return response.json()
        })
});
