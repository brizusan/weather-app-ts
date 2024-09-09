import z from "zod";

export interface ICountry {
  code: string
  name: string
}

export interface ISearch{
  city: string
  country: string
}

export const weatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
    feels_like: z.number(),
    humidity: z.number(),
  }),
});

export type Weather = z.infer<typeof weatherSchema >
