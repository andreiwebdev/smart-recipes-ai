import { z } from "zod";

export const schema = z.object({
  recipe: z.object({
    name: z.string().describe("The name of the recipe"),
    time: z.string().describe("The time it takes to prepare the recipe"),
    description: z.string().describe("A brief description of the recipe"),
    steps: z
      .array(
        z.object({
          name: z.string().describe("The name of the step"),
          instructions: z.string().describe("The instructions for the step"),
        })
      )
      .describe("The steps to prepare the recipe"),
    ingredients: z.array(
      z.object({
        name: z.string(),
        amount: z.string(),
        emoji: z.string().describe("An emoji that must describe the ingredient name")
      })
    ),
  }),
});
