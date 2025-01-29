import Image from "next/image";
import { Card } from "../common";

export const RecipeOutputScreen = () => {
  return (
    <Card extraClasses="xl:!max-w-6xl">
      <div className="xl:flex xl:w-full">
        <div className="xl:border-r xl:pr-6">
          <div className="w-full h-40 relative mb-3 sm:h-64 lg:h-80 xl:h-52">
            <Image
              className="rounded-md"
              src="/food.webp"
              alt="image placeholder"
              sizes="100%"
              fill
            />
          </div>

          <h2 className="font-extrabold text-base xl:text-lg">
            Chorizo Breakfast Casserole 🤩
          </h2>
          <p className="text-xs mb-3 xl:text-sm">9 INGREDIENTS • 10 STEPS • 1HR 50MINS</p>

          <h2 className="font-extrabold text-base mb-3 xl:text-lg">Ingredients 🍅</h2>
          <div className="flex items-center gap-2 mb-2 xl:mb-3">
            <Image
              className="rounded-md"
              src="/milk.webp"
              alt="image placeholder"
              width={40}
              height={40}
            />
            <div className="text-xs xl:text-sm">Frozen Shredded Hash Browns</div>
          </div>

          <div className="flex items-center gap-2 mb-2 xl:mb-3">
            <Image
              className="rounded-md"
              src="/milk.webp"
              alt="image placeholder"
              width={40}
              height={40}
            />
            <div className="text-xs xl:text-sm">Mexican Chorizo</div>
          </div>

          <div className="flex items-center gap-2 mb-2 xl:mb-3">
            <Image
              className="rounded-md"
              src="/milk.webp"
              alt="image placeholder"
              width={40}
              height={40}
            />
            <div className="text-xs xl:text-sm">Shredded Pepper Jack Cheese</div>
          </div>

          <div className="flex items-center gap-2 mb-2 xl:mb-3">
            <Image
              className="rounded-md"
              src="/milk.webp"
              alt="image placeholder"
              width={40}
              height={40}
            />
            <div className="text-xs xl:text-sm">Sea Salt</div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="xl:pl-6 xl:flex-1">
          <h2 className="font-extrabold text-base mb-3 xl:text-lg">
            Cooking Instructions 👩‍🍳
          </h2>

          {/* steps */}
          <div className="mb-2 last:mb-0">
            <h3 className="text-sm font-bold mb-2 xl:text-base">Step 1: Preheat the oven</h3>
            <p className="text-xs mb-2 xl:text-sm">
              Preheat the oven to 350°F. Grease a 9x13-inch baking dish with
              nonstick cooking spray.
            </p>
          </div>
          <div className="mb-2 last:mb-0">
            <h3 className="text-sm font-bold mb-2 xl:text-base">Step 1: Preheat the oven</h3>
            <p className="text-xs mb-2 xl:text-sm">
              Preheat the oven to 350°F. Grease a 9x13-inch baking dish with
              nonstick cooking spray.
            </p>
          </div>
          <div className="mb-2 last:mb-0">
            <h3 className="text-sm font-bold mb-2 xl:text-base">Step 1: Preheat the oven</h3>
            <p className="text-xs mb-2 xl:text-sm">
              Preheat the oven to 350°F. Grease a 9x13-inch baking dish with
              nonstick cooking spray.
            </p>
          </div>
          <div className="mb-2 last:mb-0">
            <h3 className="text-sm font-bold mb-2 xl:text-base">Step 1: Preheat the oven</h3>
            <p className="text-xs mb-2 xl:text-sm">
              Preheat the oven to 350°F. Grease a 9x13-inch baking dish with
              nonstick cooking spray.
            </p>
          </div>
          <div className="mb-2 last:mb-0">
            <h3 className="text-sm font-bold mb-2 xl:text-base">Step 1: Preheat the oven</h3>
            <p className="text-xs mb-2 xl:text-sm">
              Preheat the oven to 350°F. Grease a 9x13-inch baking dish with
              nonstick cooking spray.
            </p>
          </div>
          <div className="mb-2 last:mb-0">
            <h3 className="text-sm font-bold mb-2 xl:text-base">Step 1: Preheat the oven</h3>
            <p className="text-xs mb-2 xl:text-sm">
              Preheat the oven to 350°F. Grease a 9x13-inch baking dish with
              nonstick cooking spray.
            </p>
          </div>
          <div className="mb-2 last:mb-0">
            <h3 className="text-sm font-bold mb-2 xl:text-base">Step 1: Preheat the oven</h3>
            <p className="text-xs mb-2 xl:text-sm">
              Preheat the oven to 350°F. Grease a 9x13-inch baking dish with
              nonstick cooking spray.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
