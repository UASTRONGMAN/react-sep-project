import {FC} from "react";
import {IRecipe} from "../../../models/IRecipe.ts";


interface IProps{
    recipesByTag: IRecipe
}

const TagFinder:FC<IProps> = ({recipesByTag}) => {
    return (
        <div>
            <p>{recipesByTag.id}. {recipesByTag.name}.</p>
            <p>Cuisine - {recipesByTag.cuisine}</p>
            <div><img src={recipesByTag.image} alt="image"/></div>
        </div>
    );
};

export default TagFinder;