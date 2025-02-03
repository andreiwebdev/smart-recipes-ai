"use client";

import { useState } from "react";
import {
  RecipeGeneratorScreen,
  RecipeOutputScreen,
} from "@/components/recipes";
import { Preferences, Recipe } from "@/libs";
import { generateImage, generateRecipe } from "@/services";
import { Loading } from "@/components/common";

export default function Home() {
  const [recipe, setRecipe] = useState<{details: Recipe;imageBase64: string;} | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateRecipe = async (preferences: Preferences) => {
    console.log("User Preferences:", preferences);

    setLoading(true);

    try {
      const data = await generateRecipe(preferences);
      const image = await generateImage(data);

      if (image.rateLimitExceeded && data.rateLimitExceeded) {
        setError("You have reached the limit of 3 recipes per day. Please try again tomorrow. 😊");
        return;
      }

      setRecipe({
        details: data,
        imageBase64: image.data,
      });

    } catch (error) {
      console.error("Error generating recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen max-w-xs mx-auto py-6 sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
      {!recipe && (
        <>
          <h1 className="font-black text-center text-xl mb-6 lg:text-4xl xl:text-5xl animate-slideIn">
            Tell us your preferences and we&apos;ll craft the ideal recipe
            tailored to you. 🥗🔍
          </h1>
          <RecipeGeneratorScreen
            onGenerateRecipes={handleGenerateRecipe}
            error={error}
            setError={setError}
          />
        </>
      )}
      {recipe && (
        <RecipeOutputScreen
          recipe={recipe.details}
          imageBase64={recipe.imageBase64}
        />
      )}
      {loading && <Loading />}
    </div>
  );
}
