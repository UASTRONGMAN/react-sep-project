import {FC} from "react";
import {IRecipe} from "../../models/IRecipe.ts";
import Recipe from "./Recipe.tsx";

interface IProps{
    recipes:IRecipe[]
}

const RecipesList:FC<IProps> = ({recipes}) => {

    return (
        <div>
            {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

export default RecipesList;