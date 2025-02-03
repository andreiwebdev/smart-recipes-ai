import Image from "next/image";
import { Card } from "../common";
import { Recipe } from "@/libs";

export const RecipeOutputScreen = ({
  recipe,
  imageBase64,
}: {
  recipe: Recipe;
  imageBase64: string;
}) => {
  return (
    <Card extraClasses="xl:!max-w-6xl">
      <div className="xl:flex xl:w-full mb-3">
        <div className="xl:border-r xl:pr-6 xl:max-w-xs">
          <Image
            className="rounded-md mb-3"
            src={`data:image/png;base64,${imageBase64}`}
            alt="image placeholder"
            layout="responsive"
            width={16}
            height={9}
          />

          <h2 className="font-extrabold text-base xl:text-xl">
            {recipe.name} 🤩
          </h2>
          <p className="text-xs mb-2 xl:text-sm">
            {recipe.ingredients.length} INGREDIENTS • {recipe.steps.length}{" "}
            STEPS • {recipe.time}
          </p>
          <p className="text-sm">{recipe.description}</p>

        </div>

        <hr className="my-4 xl:hidden" />

        <div className="xl:pl-6 xl:flex-1">
          <h2 className="font-extrabold text-base mb-3 xl:text-xl">
            Cooking Instructions 👩‍🍳
          </h2>

          {recipe.steps.map((step, index) => (
            <div key={index} className="mb-2 xl:mb-4 last:mb-0">
              <h3 className="text-sm font-bold xl:text-lg">
                Step {index + 1}: {step.name}
              </h3>
              <p className="text-xs mb-2 xl:text-base last:mb-0">{step.instructions}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-4 xl:hidden" />
      
      <h2 className="font-extrabold text-base mb-3 xl:text-xl">
        Ingredients 🍅
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4 xl:gap-6">
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-2xl mb-1">{ingredient.emoji}</div>
            <div className="text-xs font-bold">
              {ingredient.name}
            </div>
            <div className="text-xs">{ingredient.amount}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};
