import { schema } from "@/libs";
import { ratelimit } from "@/services";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";

const model = openai("gpt-3.5-turbo-1106");
const system =
  `You are helping a user create a recipe based on his preferences.` +
  `Give the user a recipe that matches his diet, budget, cuisine, and meal preferences.` +
  `Give in detail the steps to prepare the recipe.` +
  `Use British English variants of ingredient names,` +
  `like "aubergine" instead of "eggplant".`;

export async function POST(request: Request) {
  try {
    const identifier = request.headers.get("X-Forwarded-For") || "unknown";
    const result = await ratelimit.limit(identifier);
    request.headers.set("X-RateLimit-Limit", result.limit.toString());
    request.headers.set("X-RateLimit-Remaining", result.remaining.toString());

    if (!result.success) {
      return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    const recipePreferences = await request.json();

    const { object } = await generateObject({
      model,
      schema,
      prompt: `Create a ${recipePreferences.diet} recipe with a ${recipePreferences.budget} budget,
      in the style of ${recipePreferences.cuisine} cuisine, for a ${recipePreferences.meal}.
      Ensure the recipe follows any relevant dietary restrictions.
    `,
      system,
    });

    return Response.json(
      { data: object.recipe },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error generating recipe:", error);
    return Response.json(
      { error: "An error occurred while generating the recipe." },
      { status: 500 }
    );
  }
}
