import React, { useState, useEffect } from "react";
import axios from "axios";

interface Step {
  id: string;
  message?: string;
  value?: string;
}

interface FetchRecipeProps {
  steps: { [key: string]: Step };
  triggerNextStep?: () => void;
}

const FetchRecipe: React.FC<FetchRecipeProps> = ({
  steps,
  triggerNextStep,
}) => {
  const [recipe, setRecipe] = useState<{
    title: string;
    // image: string;
    instructions: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (steps && steps["recipe-input"]) {
        const ingredient = steps["recipe-input"].value;
        try {
          const apiKey = import.meta.env.VITE_RECIPE_APIKEY;
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`
          );
          if (response.data.length > 0) {
            const firstRecipeId = response.data[0].id;
            const recipeResponse = await axios.get(
              `https://api.spoonacular.com/recipes/${firstRecipeId}/information?apiKey=${apiKey}`
            );
            setRecipe({
              title: recipeResponse.data.title,
              //   image: recipeResponse.data.image,
              instructions:
                recipeResponse.data.instructions || "No instructions available",
            });
          } else {
            setRecipe({ title: "No recipe found", instructions: "" });
          }
        } catch (error) {
          console.error("Error fetching recipe:", error);
          setRecipe({ title: "No recipe found", instructions: "" });
          //   setError("Error fetching recipe");
        } finally {
          setLoading(false);
          if (triggerNextStep) {
            triggerNextStep();
          }
        }
      }
    };

    fetchRecipe();
  }, []);

  return loading ? (
    <div>Fetching recipe...</div>
  ) : recipe ? (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.instructions}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default FetchRecipe;
