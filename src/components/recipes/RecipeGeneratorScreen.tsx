import { Preferences, RecipeGeneratorScreenProps } from "@/libs";
import React, { useState } from "react";
import { Card } from "../common";
import { FormGroup } from "./FormGroup";
import { budget, cuisines, dietary, meal } from "@/libs/constants";

export const RecipeGeneratorScreen: React.FC<RecipeGeneratorScreenProps> = ({
  onGenerateRecipes,
  error,
  setError,
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
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !preferences.diet ||
      !preferences.servings ||
      !preferences.cuisine ||
      !preferences.budget
    ) {
      setError("Please fill in all fields before generating a recipe.");
      return;
    }

    setError(null);
    onGenerateRecipes(preferences);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <FormGroup
          handleInputChange={handleInputChange}
          inputName="diet"
          title="Dietary Preferences & Restrictions:"
          values={dietary}
          otherOption
        />
        <FormGroup
          handleInputChange={handleInputChange}
          inputName="cuisine"
          title="Favorite Cuisines:"
          values={cuisines}
          otherOption
        />
        <FormGroup
          handleInputChange={handleInputChange}
          inputName="meal"
          title="Meal Type:"
          values={meal}
        />
        <FormGroup
          handleInputChange={handleInputChange}
          inputName="budget"
          title="Budget:"
          values={budget}
        />

        {error && (
          <div className="bg-red-100 p-2 rounded-md mt-4 text-sm">
            <p className="text-red-500 text-center">{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition-colors duration-300 mt-4 lg:text-lg lg:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Recipe
        </button>
      </form>
    </Card>
  );
};
