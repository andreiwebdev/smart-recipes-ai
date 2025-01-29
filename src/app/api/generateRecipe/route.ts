import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function GET() {
  const { text } = await generateText({
    model: openai("gpt-3.5-turbo-1106"),
    prompt: "Write a vegetarian pizza recipe in 50 words",
  });

  return Response.json({ data: text });
}
