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
    return data;
  } catch (error) {
    console.error("Error generating image: ", error);
  }
};
