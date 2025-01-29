import {FC} from "react";
import {IRecipe} from "../../../models/IRecipe.ts";

interface IProps{
    recipe:IRecipe
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            <h4>{recipe.id} {recipe.name}</h4>
            <p>{recipe.tags+''}</p>
        </div>
    );
};

export default Recipe;