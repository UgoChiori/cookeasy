import React, {useState, useEffect} from "react";
import axios from "axios";

interface Step {
    id: string;
    message?: string;
    value?: string;
}

interface FetchRecipeProps {
    steps: {[key: string] : Step};
    triggerNextStep?: () => void;
}


const FetchRecipe:React.FC<FetchRecipeProps> = ({steps, triggerNextStep}) => {
    const [recipe, setRecipe] = useState<{title: string, image: string, instructions: string} | null>(null);


    useEffect(() => {
        const FetchRecipe = async () => {
            const ingredients = steps["recipe-input"].value;
            try {
                const response = await axios.get(https://api.spoonacular.com/)
            }
    },[])

  return (
    <div>FetchRecipe</div>
  )
}

export default FetchRecipe