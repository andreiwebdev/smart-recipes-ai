import { Preferences } from "@/libs";

export const generateRecipe = async (preferences: Preferences) => {
  try {
    const response = await fetch("/api/generateRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });

    if (response.status === 429) {
      return { rateLimitExceeded: true };
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error generating recipe:", error);
  }
};
