import {FC} from "react";
import {IRecipe} from "../../../models/IRecipe.ts";

interface IProps{
    recipe:IRecipe
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            <h4>{recipe.id} {recipe.name}</h4>
            <p>Tags: {recipe.tags+''}</p>
            <p>Cuisine - {recipe.cuisine}</p>
            <img src={recipe.image} alt="image"/>
        </div>
    );
};

export default Recipe;