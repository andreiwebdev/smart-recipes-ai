import { Preferences } from "@/libs";

export const generateImage = async (preferences: Preferences) => {
  try {
    const response = await fetch("/api/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });

    const data = await response.json();

    if (response.status === 429) {
      return { rateLimitExceeded: true };
    }
    
    return data;
  } catch (error) {
    console.error("Error generating image: ", error);
  }
};
