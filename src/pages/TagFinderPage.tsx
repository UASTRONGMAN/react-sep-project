import {useParams} from "react-router-dom";
import {useAppSelector} from "../helpers/useAppSelector.ts";
import {useAppDispatch} from "../helpers/useAppDispatch.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../redux/slices/recipeSlice.ts";
import TagFinderList from "../components/tagFinder-list/TagFinderList.tsx";


const TagFinderPage = () => {
    const {tag} = useParams();
    console.log(tag)
    const {response} = useAppSelector(state => state.recipeSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (tag) {dispatch(recipeSliceActions.getRecipesByTag(tag))}
    }, [tag]);
    const filteredRecipesByTag = (response.recipes ?? []).filter((byTag) => byTag.tags.includes(tag || ''))
    console.log(filteredRecipesByTag)
    return (

        <div>
            <h4>Recipes by {tag}:</h4>
            <TagFinderList listByTags={filteredRecipesByTag}/>
        </div>
    );
};

export default TagFinderPage;