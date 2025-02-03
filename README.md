
# Smart Recipes AI

Smart Recipes AI is a web application that generates personalized recipes based on user preferences. It uses Open AI models to create recipes and generate images of the dishes.

## Features

- **Recipe Generation**: Create recipes tailored to dietary preferences, budget, cuisine, and meal type.
- **Image Generation**: Generate appetizing images of the recipes using AI.
- **Rate Limiting**: Rate limit requests to prevent abuse.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- OpenAI API access for recipe and image generation.
- An Upstash account for Redis and rate limiting. (optional, you can uncomment the code in `src/services/upstashRateLimit.ts`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/andreiwebdev/smart-recipes-ai.git
   cd smart-recipes-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add your Upstash and OpenAI credentials:

   ```plaintext
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   OPENAI_API_KEY=your_openai_api_key
   ```

### Running the Application

Start the development server:
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Code Structure

- **API Routes**: Handles recipe and image generation requests.
  - `src/app/api/generateRecipe/route.ts`: Handles recipe generation requests.
  - `src/app/api/generateImage/route.ts`: Handles image generation requests.

- **Services**: Contains logic for interacting with services.
  - `src/services/upstashRateLimit.ts`: Configures rate limiting using Upstash.
  - `src/services/generateRecipe.ts`: Sends requests to generate recipes.
  - `src/services/generateImage.ts`: Sends requests to generate images.

- **Components**: UI components for the application.
  - `src/components/recipes/RecipeGeneratorScreen.tsx`: Form for inputting recipe preferences.
  - `src/components/recipes/RecipeOutputScreen.tsx`: Displays the generated recipe and image.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.