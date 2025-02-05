import { ratelimit } from "@/services";
import { openai } from "@ai-sdk/openai";
import { experimental_generateImage as generateImage } from "ai";

const model = openai.image("dall-e-2");

export async function POST(request: Request) {
  try {
    const identifier = request.headers.get("X-Forwarded-For") || "unknown";
    const result = await ratelimit.limit(identifier);
    request.headers.set("X-RateLimit-Limit", result.limit.toString());
    request.headers.set("X-RateLimit-Remaining", result.remaining.toString());
    
    const expectedIdentifier = identifier ? identifier.split(",")[0].trim() : "unknown";
    console.log("Incoming Headers: ", request.headers);
    console.log("Identifier: ", identifier);
    console.log("Expected Identifier: ", expectedIdentifier);
    
    if (!result.success) {
      return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
    }
    
    const data = await request.json();
    console.log("Incoming request: ", data);
    
    const ingredients = data.ingredients
    .map((ingredient: { name: string }) => ingredient.name)
    .join(", ");
    
    const { image } = await generateImage({
      model,
      prompt: `Create a professional, appetizing food photograph of ${data.name}. The dish should prominently feature ${ingredients}. Style it like a high-end restaurant's menu photo with elegant plating, soft natural lighting, and a shallow depth of field. Include garnishes and thoughtful presentation on a clean, minimal background.`,
      size: "512x512",
      n: 1,
      providerOptions: {
        openai: { style: "natural" }
      }
    });

    return Response.json(
      { 
        data: image.base64,
        rateLimit: { limit: result.limit, remaining: result.remaining }
      },
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
      { error: "An error occurred while generating the image." },
      { status: 500 }
    );
  }
}
