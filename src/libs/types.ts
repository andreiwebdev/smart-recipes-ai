export type Preferences = {
  diet: string;
  servings: number;
  cuisine: string;
  budget: string;
};

export type RecipeGeneratorScreenProps = {
  loading?: boolean;
  onGenerateRecipes: (preferences: Preferences) => void;
};

export type Recipe = {
  name: string;
  description: string;
  time: string;
  ingredients: {
    name: string;
    amount: string;
    emoji: string;
  }[];
  steps: {
    name: string;
    instructions: string;
  }[];
};