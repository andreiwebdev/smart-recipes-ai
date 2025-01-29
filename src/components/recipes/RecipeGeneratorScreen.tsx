import { Preferences, RecipeGeneratorScreenProps } from "@/libs";
import React, { useState } from "react";
import { Card } from "../common";
import { FormGroup } from "./FormGroup";
import { budget, cuisines, dietary, meal } from "@/libs/constants";

export const RecipeGeneratorScreen: React.FC<RecipeGeneratorScreenProps> = ({
  onGenerateRecipes,
}) => {
  const [preferences, setPreferences] = useState<Preferences>({
    diet: "",
    servings: 1,
    cuisine: "",
    budget: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setPreferences((prev) => ({
      ...prev,
      [name]: name === "servings" ? parseInt(value, 10) || 1 : value, // Ensure servings is a number
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGenerateRecipes(preferences);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
       <FormGroup handleInputChange={handleInputChange} inputName="diet" title="Dietary Preferences & Restrictions:" values={dietary} otherOption />
       <FormGroup handleInputChange={handleInputChange} inputName="cuisine" title="Favorite Cuisines:" values={cuisines} otherOption />
       <FormGroup handleInputChange={handleInputChange} inputName="meal" title="Meal Type:" values={meal} />
       <FormGroup handleInputChange={handleInputChange} inputName="budget" title="Budget:" values={budget} />

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 mt-4 lg:text-lg lg:py-3"
        >
          Generate Recipes
        </button>
      </form>
    </Card>
  );
};
