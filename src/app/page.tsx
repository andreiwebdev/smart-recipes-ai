"use client";

import { useState } from "react";
import { RecipeGeneratorScreen, RecipeOutputScreen } from "@/components/recipes";
import { Preferences } from "@/libs";

export default function Home() {
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  const handleGenerateRecipes = async (preferences: Preferences) => {
    console.log("User Preferences:", preferences);

    setPreferences(preferences);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen max-w-xs mx-auto py-6 sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
      {!preferences && (
        <>
          <h1 className="font-black text-center text-xl mb-6 lg:text-4xl xl:text-5xl">Tell us your preferences and we&apos;ll craft the ideal recipe tailored to you. 🥗🔍</h1>
          <RecipeGeneratorScreen onGenerateRecipes={handleGenerateRecipes} />
        </>
      )}
      {preferences && (
        <RecipeOutputScreen />
      )}
    </div>
  );
}
