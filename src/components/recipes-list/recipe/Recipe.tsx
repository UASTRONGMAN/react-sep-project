import {FC} from "react";
import {IRecipe} from "../../../models/IRecipe.ts";
import {Link} from "react-router-dom";

interface IProps{
    recipe:IRecipe
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            <Link to={`${recipe.id}`}>{recipe.id}. {recipe.name}.</Link> <br/>
            <div>
                {recipe.tags.map((tag) => (
                    <Link to={`tag/${tag}`} key={tag}>{tag + ' '}</Link>
                ))}
            </div>
        </div>
    );
};

export default Recipe;