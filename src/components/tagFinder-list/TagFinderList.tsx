import {FC} from "react";
import {IRecipe} from "../../models/IRecipe.ts";
import TagFinder from "./tagFinder/TagFinder.tsx";

interface IProps{
    listByTags: IRecipe[],
}

const TagFinderList:FC<IProps> = ({listByTags}) => {
    return (
        <div>
            {listByTags.map(recipesByTag => <TagFinder recipesByTag={recipesByTag} key={recipesByTag.id}/>)}
        </div>
    );
};

export default TagFinderList;