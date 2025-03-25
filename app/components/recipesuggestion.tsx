import { useEffect, useState } from 'react';

interface Recipe{
    id: number;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string;
    image: string;
    category: string;
    servings: number;
    preparationTime: number;
    cookingTime: number;
    totalTime: number;
    difficulty: string;
    dietaryRestrictions: string[];
    vegan: boolean;
    vegetarian: boolean;
    glutenFree: boolean;
    nutritionalValue: string;
    nutritionalInfo: NutritionalInfo;
    tags: string[];
    author: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}
interface NutritionalInfo{
    calories: number;
    fat: number;
    carbohydrates: number;
    protein: number;
    fiber: number;
    sugar: number;
    sodium: number;
    cholesterol: number;
}
const RecipeSuggestions = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/api/recipes');
            const data = await response.json();
            setRecipes(data);
        };
        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>Recipe Suggestions</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSuggestions;