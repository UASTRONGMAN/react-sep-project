import {FC} from "react";
import {IRecipe} from "../../models/IRecipe.ts";

interface IProps{
    recipe:IRecipe
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            {recipe.id}. {recipe.name}. <br/>
            {recipe.tags + ''}
        </div>
    );
};

export default Recipe;