import {FC} from "react";
import {IRecipe} from "../../../models/IRecipe.ts";

interface IProps{
    recipe:IRecipe
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            <div>
                <h4>{recipe.id} {recipe.name}</h4>

                <p>Tags:</p>
                <p>{recipe.tags + ''}</p>
                <p>Cuisine - {recipe.cuisine}</p>
            </div>
            <div><img src={recipe.image} alt="image"/></div>
        </div>
    );
};

export default Recipe;