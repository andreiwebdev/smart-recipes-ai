export type Preferences = {
  diet: string;
  servings: number;
  cuisine: string;
  budget: string;
};

export type RecipeGeneratorScreenProps = {
  onGenerateRecipes: (preferences: Preferences) => void;
};